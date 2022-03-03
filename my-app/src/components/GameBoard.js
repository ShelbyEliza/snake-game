import "../css/GameBoard.css";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTimer } from "../hooks/useTimer";
import { useStatus } from "../hooks/useStatus";

import Cell from "./Cell";
import CheckForOpposite from "./CheckForOpposite";
import GenerateFood from "./GenerateFood";
import ModifySnakeBody from "./ModifySnakeBody";
import GenerateSnakeHead from "./GenerateSnakeHead";

const _ = require("lodash");

const GameBoard = ({
  board,
  rows,
  initialHead,
  initialFood,
  handleGameOver,
}) => {
  const [isGameLost, setIsGameLost] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const { dimensions, pauseState, changeScore } = useStatus();
  const { timer } = useTimer();

  const [inputDirection, setInputDirection] = useState("KeyS");
  const [size, setSize] = useState();
  const [length, setLength] = useState(board.length);
  const [cells, setCells] = useState();

  const newSnakeHead = useRef();
  const cellsRef = useRef();
  const prevHeadRef = useRef(initialHead);
  const snakeBodyRef = useRef();
  const foodRef = useRef();
  const amountEatenRef = useRef(0);
  const notFood = (cell) => cell.status !== "isFood";

  useEffect(() => {
    if (board) {
      const deepBoard = _.cloneDeep(board);
      cellsRef.current = deepBoard;
      prevHeadRef.current = initialHead;
      snakeBodyRef.current = [];
      foodRef.current = initialFood;
      amountEatenRef.current = 0;

      setInputDirection("KeyS");
      setLength(board.length);
      setSize(dimensions * 60);
      setCells(deepBoard);
    }
  }, [board, dimensions, length, initialHead, initialFood]);

  // function assesses keyup event:
  const handleDirection = useCallback(
    (e) => {
      if (!pauseState) {
        if (inputDirection !== e.code) {
          setInputDirection(CheckForOpposite(inputDirection, e.code));
        }
      }
    },
    [inputDirection, pauseState]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleDirection);

    return () => {
      document.removeEventListener("keyup", handleDirection);
    };
  }, [handleDirection]);

  useEffect(() => {
    newSnakeHead.current = GenerateSnakeHead(
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
      prevHeadRef.current = newSnakeHead.current;
      setCells(cellsArray);
    }
  }, [timer, length, changeScore]);

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
          rows !== 0 &&
          cells.map((cell) => (
            <Cell
              key={cell.row.toString() + "-" + cell.col.toString()}
              cell={cell}
              inputDirection={inputDirection}
            ></Cell>
          ))}
      </div>
    </>
  );
};

export default GameBoard;
