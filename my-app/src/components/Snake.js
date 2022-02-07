import { useState } from "react";

const Snake = (board) => {
  const [snake, setSnake] = useState([]);

  // const buildSnake = () => {
  let snakeArray = board.filter((cell) => cell.status === "isSnake");
  setSnake(snakeArray);
  // };

  return snake;
};

export default Snake;
