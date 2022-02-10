import { useState, useEffect } from "react";

export const useCell = (board) => {
  const [cells, setCells] = useState([]);

  useEffect(() => {
    if (board && board !== 0) {
      setCells(board);
    }
  }, [board]);

  return { cells };
};
