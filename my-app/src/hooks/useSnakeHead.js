import { useState, useEffect } from "react";

export const useSnakeHead = (board) => {
  const [snakeHead, setSnakeHead] = useState();
  const [cellArray, setCellArray] = useState([]);

  useEffect(() => {
    if (board && board !== 0) {
      let snakeArray = board.filter((cell) => cell.status === "isSnake");
      setSnakeHead(snakeArray[0]);
      setCellArray(board);
    }
  }, [board]);

  return { snakeHead, cellArray };
};
