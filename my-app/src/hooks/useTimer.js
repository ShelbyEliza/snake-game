import { useState, useEffect } from "react";

export const useTimer = (isGamePaused, board, rows) => {
  const [timer, setTimer] = useState(0);
  const [snake, setSnake] = useState([]);
  const [snakeHead, setSnakeHead] = useState();
  const [cellArray, setCellArray] = useState([]);

  useEffect(() => {
    if (board && board !== 0) {
      let snakeArray = board.filter((cell) => cell.status === "isSnake");
      setSnakeHead(snakeArray[0]);
      setCellArray(board);
    }
  }, [board]);

  useEffect(() => {
    if (snakeHead) {
      let snakeHeadDown = snakeHead.id + rows;
      let snakeHeadUp = snakeHead.id - rows;
      let snakeHeadLeft = snakeHead.id - 1;
      let snakeHeadRight = snakeHead.id + 1;
      // console.log(snakeHeadUp, snakeHeadRight, snakeHeadDown, snakeHeadLeft);
      let arrayAroundHead = cellArray.map((cell) => {
        if (
          cell.id === snakeHeadUp ||
          cell.id === snakeHeadRight ||
          cell.id === snakeHeadDown ||
          cell.id === snakeHeadLeft
        ) {
          return { ...cell, status: "aroundHead" };
        } else {
          return cell;
        }
      });
      console.log(arrayAroundHead);
      setCellArray(arrayAroundHead);
    }
  }, [snakeHead, rows]);

  useEffect(() => {
    if (isGamePaused) {
      setTimer(0);
    }
    if (!isGamePaused) {
      const id = setInterval(() => {
        setTimer((c) => c + 1);
      }, 3000);
      return () => clearInterval(id);
    }
  }, [timer, isGamePaused]);

  return { timer, cellArray };
};
