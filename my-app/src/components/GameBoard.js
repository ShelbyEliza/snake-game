import "../css/GameBoard.css";

import { useState, useEffect, useRef } from "react";
import { useTimer } from "../hooks/useTimer";
import { useStatus } from "../hooks/useStatus";

import Cell from "./Cell";
import GameStatus from "./GameStatus";
import CheckForOpposite from "./CheckForOpposite";
import ControlDirection from "./ControlDirection";
import GenerateFood from "./GenerateFood";
import ModifySnakeBody from "./ModifySnakeBody";

const GameBoard = ({
  board,
  rows,
  isGamePaused,
  initialHead,
  initialFood,
  handleGameOver,
}) => {
  const [isGameLost, setIsGameLost] = useState(false);
  const { changeOverStatus, changeLostStatus, changeScore } = useStatus();
  const { timer } = useTimer(isGamePaused);

  const controller = useRef(null);
  const [inputDirection, setInputDirection] = useState("ArrowDown");
  const [size, setSize] = useState();
  const [length, setLength] = useState(board.length);
  const [cells, setCells] = useState();
  // const [resetToggle, setResetToggle] = useState(0);

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
      console.log("using effect");

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
    if (timer) {
      let wasFoodEaten = false;
      let newHead = ControlDirection(
        prevHeadRef.current,
        inputDirection,
        rows,
        length
      );

      let cellsArray = cellsRef.current.map((cell) => {
        if (cell.id === prevHeadRef.current.id) {
          return { ...cell, status: "notSnake" };
        }
        if (cell.id === newHead) {
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
          newHead = cell;
          return cell;
        } else {
          return cell;
        }
      });

      if (cellsArray.every(notFood)) {
        foodRef.current = GenerateFood(cellsArray, length);
        cellsArray[foodRef.current.id - 1] = foodRef.current;
      }

      let newBody = ModifySnakeBody(
        snakeBodyRef.current,
        newHead,
        wasFoodEaten,
        amountEatenRef.current,
        cellsArray
      );

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

      cellsRef.current = cellsArray;
      prevHeadRef.current = newHead;
      setCells(cellsArray);
    }
  }, [timer, rows, length, inputDirection, changeScore]);

  useEffect(() => {
    if (isGameLost) {
      handleGameOver();
      setIsGameLost(false);
    }
  }, [isGameLost, handleGameOver]);

  // useEffect(() => {
  //   setIsGameLost(true);
  // }, [resetToggle])

  // const handleReset = () => {
  //   // changeOverStatus(false);
  //   // changeLostStatus(false);
  //   changeScore(0);
  //   if (resetToggle) {
  //     setResetToggle(0);
  //   } else {
  //     setResetToggle(1);
  //   }

  //   console.log("Resetting");
  // };

  return (
    <>
      {/* {isGameLost && <GameStatus handleReset={handleReset} />} */}
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
    </>
  );
};

export default GameBoard;
