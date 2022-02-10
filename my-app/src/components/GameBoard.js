import { useState, useEffect, useRef } from "react";
import "../css/GameBoard.css";

import Cell from "./Cell";

import { useTimer } from "../hooks/useTimer";

const GameBoard = ({ board, rows, isGamePaused, initialHeadPosition }) => {
  const [size, setSize] = useState();
  const { timer } = useTimer(isGamePaused);
  const [cells, setCells] = useState();
  const [direction, setDirection] = useState({});
  const headRef = useRef(initialHeadPosition);
  const cellsArrayRef = useRef(board);

  useEffect(() => {
    if (board && board !== 0) {
      cellsArrayRef.current = board;
      headRef.current = initialHeadPosition;

      let tempDirection = {
        up: headRef.current.id - rows,
        right: headRef.current.id + 1,
        down: headRef.current.id + rows,
        left: headRef.current.id - 1,
      };
      setDirection(tempDirection);
      setSize(rows * 60);
      setCells(board);
    }
  }, [board, rows, initialHeadPosition]);

  useEffect(() => {
    if (timer) {
      console.log(timer, cellsArrayRef.current, headRef.current);
      let newHeadRef;
      console.log(
        timer,
        direction.up,
        direction.right,
        direction.down,
        direction.left
      );
      let cellsArray = cellsArrayRef.current.map((cell) => {
        if (cell.id === headRef.current.id) {
          // if (headRef.current.id + rows + rows > cellsArrayRef.length - 1) {

          // }
          return { ...cell, status: "notSnake" };
        }
        if (cell.id === headRef.current.id + rows) {
          newHeadRef = cell;
          return { ...cell, status: "isSnake" };
        } else {
          return cell;
        }
      });
      cellsArrayRef.current = cellsArray;
      headRef.current = newHeadRef;
      setCells(cellsArray);
    }
  }, [timer, rows, initialHeadPosition, direction]);

  return (
    <div
      className="GameBoard"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {/* {board.map((cell) => (
          <Cell
            key={cell.row.toString() + "-" + cell.col.toString()}
            cell={cell}
            isGamePaused={isGamePaused}
            board={board}
          ></Cell>
        ))} */}
      {cells
        ? cells.map((cell) => (
            <Cell
              key={cell.row.toString() + "-" + cell.col.toString()}
              cell={cell}
              cellsArrayRef={cellsArrayRef}
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
