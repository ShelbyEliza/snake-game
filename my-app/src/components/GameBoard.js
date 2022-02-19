import "../css/GameBoard.css";

import { useState, useEffect, useRef } from "react";
import { useTimer } from "../hooks/useTimer";
import { useDirection } from "../hooks/useDirection";

import Cell from "./Cell";
import ControlDirection from "./ControlDirection";
import GenerateFood from "./GenerateFood";
import ModifySnakeBody from "./ModifySnakeBody";
import BuildCells from "./BuildCells";

const GameBoard = ({ board, rows, isGamePaused, initialHead, initialFood }) => {
  const { timer } = useTimer(isGamePaused);
  const controller = useRef(null);
  const [inputDirection, setInputDirection] = useState("ArrowDown");
  const [size, setSize] = useState();
  const [length, setLength] = useState(board.length);
  const [cells, setCells] = useState();

  const inputRef = useRef("ArrowDown");
  const cellsRef = useRef(board);
  const prevHeadRef = useRef(initialHead);
  const snakeBodyRef = useRef();
  const foodRef = useRef();
  const amountEatenRef = useRef(0);
  // const { direction, count } = useDirection(isGamePaused, inputDirection, inputRef);
  const notFood = (cell) => cell.status !== "isFood";

  useEffect(() => {
    if (board) {
      inputRef.current = "ArrowDown";
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
      setInputDirection(e.key);
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
          if (cell.status === "isFood") {
            wasFoodEaten = true;
            amountEatenRef.current++;
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
      // console.log(matches);

      let newCellsArray = cellsArray.map((cell) => {
        if (matches.includes(cell)) {
          return { ...cell, status: "isSnake" };
        } else if (cell.status === "isSnake") {
          return { ...cell, status: "notSnake" };
        }

        return cell;
      });

      cellsArray = newCellsArray;
      // let newCellsArray = cellsArray.map((cell) => {
      //   if (newBody.includes(cell.id)) {
      //     if (newBody[cell.id - 1].status === "isSnakeHead") {
      //       return { ...cell, status: "isSnakeHead" };
      //     } else if (newBody[cell.id - 1].status === "isSnake") {
      //       return { ...cell, status: "isSnake" };
      //     }
      //   } else {
      //     return cell;
      //   }
      // });
      console.log(newBody);
      console.log(newCellsArray);

      cellsRef.current = cellsArray;
      prevHeadRef.current = newHead;
      setCells(cellsArray);
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
      <div>
        <h2 className="score">{amountEatenRef.current}</h2>
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
