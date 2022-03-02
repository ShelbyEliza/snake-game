import "../css/GameBoard.css";

import { useState, useEffect, useRef } from "react";
import { useTimer } from "../hooks/useTimer";
import { useStatus } from "../hooks/useStatus";

import Cell from "./Cell";
import CheckForOpposite from "./CheckForOpposite";
import GenerateFood from "./GenerateFood";
import ModifySnakeBody from "./ModifySnakeBody";
import GetSnakeHead from "./GetSnakeHead";

const GameBoard = ({
  board,
  rows,
  isGamePaused,
  initialHead,
  initialFood,
  handleGameOver,
}) => {
  const [isGameLost, setIsGameLost] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const { changeScore } = useStatus();
  const { timer } = useTimer(isGamePaused);

  const controller = useRef(null);
  const [inputDirection, setInputDirection] = useState("ArrowDown");
  const [size, setSize] = useState();
  const [length, setLength] = useState(board.length);
  const [cells, setCells] = useState();

  const newSnakeHead = useRef();
  const cellsRef = useRef(board);
  const prevHeadRef = useRef(initialHead);
  const snakeBodyRef = useRef();
  const foodRef = useRef();
  const amountEatenRef = useRef(0);
  const notFood = (cell) => cell.status !== "isFood";

  useEffect(() => {
    if (board) {
      cellsRef.current = board;
      prevHeadRef.current = initialHead;
      snakeBodyRef.current = [];
      foodRef.current = initialFood;
      amountEatenRef.current = 0;

      setInputDirection("ArrowDown");
      setLength(board.length);
      setSize(rows * 60);
      setCells(board);
    }
  }, [board, rows, length, initialHead, initialFood]);

  // focuses on input when game is not paused:
  useEffect(() => {
    if (!isGamePaused) {
      controller.current.focus();
    }
  }, [isGamePaused]);

  // function logs whatever key was pressed:
  const handleDirection = (e) => {
    if (inputDirection !== e.key) {
      setInputDirection(CheckForOpposite(inputDirection, e.key));
    }
  };

  useEffect(() => {
    newSnakeHead.current = GetSnakeHead(
      prevHeadRef,
      inputDirection,
      rows,
      length,
      cellsRef
    );
  }, [inputDirection, timer, length, rows]);

  useEffect(() => {
    if (timer !== 0) {
      let wasFoodEaten = false;
      // console.log(cellsRef.current);
      let cellsArray = cellsRef.current.map((cell) => {
        if (cell.id === prevHeadRef.current.id) {
          return { ...cell, status: "notSnake" };
        }
        if (cell.id === newSnakeHead.current.id) {
          if (cell.status === "isSnake") {
            setIsGameLost(true);
            console.log("Opps, Game Over!");
          }
          if (cell.status === "isFood") {
            wasFoodEaten = true;
            amountEatenRef.current++;
            changeScore(amountEatenRef.current);
          }
          cell.status = "isSnakeHead";
          newSnakeHead.current = cell;
          return cell;
        } else {
          return cell;
        }
      });
      // console.log(cellsRef.current);

      if (cellsArray.every(notFood)) {
        foodRef.current = GenerateFood(cellsArray, length);
        cellsArray[foodRef.current.id - 1] = foodRef.current;
      }

      let newBody = ModifySnakeBody(
        snakeBodyRef.current,
        newSnakeHead.current,
        wasFoodEaten,
        amountEatenRef.current,
        cellsArray
      );
      // console.log(newBody);

      let ids = newBody.map((segment) => segment.id);

      let matches = cellsArray.filter((cell) => {
        return ids.includes(cell.id) && cell.status !== "isSnakeHead";
      });

      cellsArray = cellsArray.map((cell) => {
        if (matches.includes(cell)) {
          return { ...cell, status: "isSnake" };
        } else if (cell.status === "isSnake") {
          return { ...cell, status: "notSnake" };
        }
        return cell;
      });

      if (ids.length === cellsArray.length - 1) {
        setIsGameWon(true);
        console.log("Good Job");
      }

      cellsRef.current = cellsArray;
      // console.log(cellsRef.current);
      prevHeadRef.current = newSnakeHead.current;
      setCells(cellsArray);
    }
    // else {
    //   console.log(cellsRef.current, prevHeadRef.current);
    // }
  }, [timer, rows, length, changeScore]);

  // if (isGamePaused) {
  //   console.log(cellsRef.current);
  //   console.log(cells);
  // }

  useEffect(() => {
    if (isGameLost) {
      handleGameOver(isGameLost, isGameWon);
      setIsGameLost(false);
    }
    if (isGameWon) {
      handleGameOver(isGameLost, isGameWon);
      setIsGameWon(false);
    }
  }, [isGameLost, isGameWon, handleGameOver]);

  return (
    <>
      <div
        className="GameBoard"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {cells &&
          cells.map((cell) => (
            <Cell
              key={cell.row.toString() + "-" + cell.col.toString()}
              cell={cell}
              inputDirection={inputDirection}
            ></Cell>
          ))}
      </div>
      <div>
        <input
          className="direction"
          type="text"
          onKeyUp={(e) => handleDirection(e)}
          ref={controller}
        />
      </div>
      <div>{timer}</div>
    </>
  );
};

export default GameBoard;
