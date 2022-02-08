import { useState, useEffect } from "react";
import { useSnakeHead } from "./useSnakeHead";
import { useTimer } from "./useTimer";

export const useCell = (isGamePaused, board, rows) => {
  const [cells, setCells] = useState([]);
  const { timer } = useTimer(isGamePaused);

  useEffect(() => {
    if (board && board !== 0) {
      setCells(board);
    }
  }, [board]);

  const { snakes, snakeHead, mutableCells } = useSnakeHead(cells, rows, timer);

  return { cells, snakes, snakeHead, mutableCells, timer };
};
