import "../css/GameBoard.css";

import { useState, useEffect, useRef } from "react";
import { useTimer } from "../hooks/useTimer";

import Cell from "./Cell";
import ControlDirection from "./ControlDirection";
import GenerateFood from "./GenerateFood";
import ModifySnakeBody from "./ModifySnakeBody";

const GameBoard = ({ board, rows, isGamePaused, initialHead, initialFood }) => {
  const { timer } = useTimer(isGamePaused);
  const controller = useRef(null);
  const [inputDirection, setInputDirection] = useState(null);
  const [size, setSize] = useState();
  const [length, setLength] = useState();
  const [cells, setCells] = useState();
  // const [snakeBody, setSnakeBody] = useState([]);

  const cellsRef = useRef();
  const headRef = useRef();
  const snakeBodyRef = useRef();
  const foodRef = useRef();

  // runs initially and when board changes:
  useEffect(() => {
    if (board && board !== 0) {
      cellsRef.current = board;
      headRef.current = initialHead;
      snakeBodyRef.current = [];
      foodRef.current = initialFood;

      setLength(board.length);
      setSize(rows * 60);
      setCells(board);
      // setSnakeBody([initialHead]);
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
    setInputDirection(e.key);
  };

  useEffect(() => {
    if (timer) {
      const notFood = (cell) => cell.status !== "isFood";
      let newHead = ControlDirection(
        headRef.current.id,
        inputDirection,
        rows,
        length
      );
      snakeBodyRef.current.push(headRef.current);
      let newBody = ModifySnakeBody(
        snakeBodyRef.current,
        inputDirection,
        rows,
        length,
        headRef.current
      );
      console.log(newBody);

      let cellsArray = cellsRef.current.map((cell) => {
        if (cell.id === headRef.current.id) {
          return { ...cell, status: "notSnake" };
        }
        if (cell.id === newHead) {
          newHead = cell;
          return { ...cell, status: "isSnakeHead" };
        } else {
          return cell;
        }
      });

      if (cellsArray.every(notFood)) {
        foodRef.current = GenerateFood(cellsArray, length);
        // ???
        cellsArray[foodRef.current.id - 1] = foodRef.current;
      }
      cellsRef.current = cellsArray;
      headRef.current = newHead;
      setCells(cellsArray);
      // console.log(newHead, headRef.current);

      // console.log(snakeBodyRef.current);
    }
  }, [timer, rows, length, inputDirection]);

  return (
    <>
      <div
        className="GameBoard"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {cells
          ? cells.map((cell) => (
              <Cell
                key={cell.row.toString() + "-" + cell.col.toString()}
                cell={cell}
              ></Cell>
            ))
          : board.map((cell) => (
              <Cell
                key={cell.row.toString() + "-" + cell.col.toString()}
                cell={cell}
                isGamePaused={isGamePaused}
                board={board}
              ></Cell>
            ))}
      </div>
      <input
        className="direction"
        type="text"
        onKeyUp={(e) => handleDirection(e)}
        ref={controller}
      />
    </>
  );
};

export default GameBoard;
