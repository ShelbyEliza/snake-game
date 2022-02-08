import { useState, useEffect, useRef } from "react";

export const useSnakeHead = (cells, rows, timer) => {
  const [snakeHead, setSnakeHead] = useState();
  const [snakes, setSnakes] = useState([]);
  const [mutableCells, setMutableCells] = useState();
  // const cellsRef = useRef(null);

  useEffect(() => {
    if (cells && cells !== 0) {
      setMutableCells(cells);
    }
  }, [cells]);

  useEffect(() => {
    if (mutableCells && mutableCells !== 0) {
      console.log("mutableCells has changed.");
      let snakesArray = mutableCells.filter(
        (cell) => cell.status === "isSnake"
      );
      setSnakes(snakesArray);
      setSnakeHead(snakesArray[0]);
    }
  }, [mutableCells]);

  useEffect(() => {
    if (snakeHead) {
      console.log(snakeHead.id);
      let snakeHeadDown = snakeHead.id + rows;
      let snakeHeadUp = snakeHead.id - rows;
      let snakeHeadLeft = snakeHead.id - 1;
      let snakeHeadRight = snakeHead.id + 1;

      let arrayAroundHead = mutableCells.map((cell) => {
        // if (cell.id === snakeHead.id) {
        //   return { ...cell, status: "notSnake" };
        // }
        if (cell.id === snakeHeadDown) {
          return { ...cell, status: "isSnake" };
        } else {
          return cell;
        }
      });

      // console.log(snakeHeadUp, snakeHeadRight, snakeHeadDown, snakeHeadLeft);
      // let arrayAroundHead = mutableCells.map((cell) => {
      //   if (
      //     cell.id === snakeHeadUp ||
      //     cell.id === snakeHeadRight ||
      //     cell.id === snakeHeadDown ||
      //     cell.id === snakeHeadLeft
      //   ) {
      //     return { ...cell, status: "aroundHead" };
      //   } else {
      //     return cell;
      //   }
      // });

      setMutableCells(arrayAroundHead);
    }
  }, [rows, timer, snakeHead]);

  return { snakes, snakeHead, mutableCells };
};
