import { useState, useEffect, useRef } from "react";
import "../css/GameBoard.css";

import Cell from "./Cell";
import MoveDown from "./MoveDown";
import MoveUp from "./MoveUp";

import { useTimer } from "../hooks/useTimer";

const GameBoard = ({ board, rows, isGamePaused, initialHeadPosition }) => {
  const [size, setSize] = useState();
  const [length, setLength] = useState();
  const [cells, setCells] = useState();

  const { timer } = useTimer(isGamePaused);
  const headRef = useRef(initialHeadPosition);
  const cellsRef = useRef(board);

  useEffect(() => {
    if (board && board !== 0) {
      cellsRef.current = board;
      headRef.current = initialHeadPosition;

      setLength(board.length);
      setSize(rows * 60);
      setCells(board);
    }
  }, [board, rows, length, initialHeadPosition]);

  useEffect(() => {
    if (timer) {
      // let newHead = MoveDown(headRef.current.id, rows, length);
      let newHead = MoveUp(headRef.current.id, rows, length);

      let cellsArray = cellsRef.current.map((cell) => {
        if (cell.id === headRef.current.id) {
          return { ...cell, status: "notSnake" };
        }
        if (cell.id === newHead) {
          newHead = cell;
          return { ...cell, status: "isSnake" };
        } else {
          return cell;
        }
      });
      cellsRef.current = cellsArray;
      headRef.current = newHead;
      setCells(cellsArray);
      // console.log(timer, headRef.current, cellsRef);
    }
  }, [timer, rows, initialHeadPosition, length]);

  return (
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
              // cellsRef={cellsRef}
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
  );
};

export default GameBoard;
