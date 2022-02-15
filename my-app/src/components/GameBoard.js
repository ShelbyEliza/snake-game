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
  const [amountEaten, setAmountEaten] = useState();
  // const [snakeBody, setSnakeBody] = useState([]);

  const cellsRef = useRef();
  const headRef = useRef();
  const snakeBodyRef = useRef();
  const foodRef = useRef();
  const amountEatenRef = useRef();

  // runs initially and when board changes:
  useEffect(() => {
    if (board && board !== 0) {
      cellsRef.current = board;
      headRef.current = initialHead;
      snakeBodyRef.current = [];
      foodRef.current = initialFood;
      amountEatenRef.current = 0;

      setLength(board.length);
      setSize(rows * 60);
      setCells(board);
      setAmountEaten(0);
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
      let wasFoodEaten = false;
      let newHead = ControlDirection(
        headRef.current.id,
        inputDirection,
        rows,
        length
      );

      let cellsArray = cellsRef.current.map((cell) => {
        if (cell.id === headRef.current.id) {
          return { ...cell, status: "notSnake" };
        }
        if (cell.id === newHead) {
          if (cell.status === "isFood") {
            wasFoodEaten = true;
            amountEatenRef.current++;
          }
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

      let newBody = ModifySnakeBody(
        snakeBodyRef.current,
        newHead,
        wasFoodEaten,
        amountEatenRef.current,
        cellsArray
      );

      // console.log(newBody);

      // for (var i = 0; i < cellsArray.length; i++) {
      //   for (var j = 0; j < newBody.length; j++) {
      //     if (cellsArray[i].id === newBody[j].id) {
      //       cellsArray[i].status = newBody[j].status;
      //     } else {
      //       if (
      //         cellsArray[i].id !== newBody[j].id &&
      //         cellsArray[i].status === "isSnake"
      //       ) {
      //         cellsArray[i].status = "notSnake";
      //       }
      //     }
      //   }
      // }

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
