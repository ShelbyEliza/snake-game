import { useState, useEffect } from "react";

export const useSnakeHead = (cells, rows, timer) => {
  const [snakeHead, setSnakeHead] = useState();
  const [snakes, setSnakes] = useState([]);
  const [mutableCells, setMutableCells] = useState();

  useEffect(() => {
    if (cells && cells !== 0) {
      setMutableCells(cells);
    }
  }, [cells]);

  useEffect(() => {
    if (mutableCells && mutableCells !== 0) {
      let snakesArray = mutableCells.filter(
        (cell) => cell.status === "isSnake"
      );
      setSnakes(snakesArray);
      // setSnakeHead(snakesArray[0]);
    }
  }, [mutableCells]);

  useEffect(() => {
    if (snakes.length > 0) {
      let snakeHeadDown = snakes[0].id + rows;
      // let snakeHeadUp = snakeHead.id - rows;
      // let snakeHeadLeft = snakeHead.id - 1;
      // let snakeHeadRight = snakeHead.id + 1;

      let tempCellsArray = mutableCells.map((cell) => {
        if (cell.id === snakes[0].id) {
          return { ...cell, status: "notSnake" };
        } else if (cell.id === snakeHeadDown) {
          return { ...cell, status: "isSnake" };
        } else {
          return cell;
        }
      });
      setMutableCells(tempCellsArray);
    }
  }, [timer, rows, snakes]);

  return { snakes, snakeHead, mutableCells };
};
