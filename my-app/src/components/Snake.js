import { useState } from "react";

const Snake = (board) => {
  const [snake, setSnake] = useState([]);
  const [snakeHead, setSnakeHead] = useState();

  // const buildSnake = () => {
  let snakeArray = board.filter((cell) => cell.status === "isSnake");
  setSnake(snakeArray);
  // };

  // const buildSnake = () => {
  //   let snakeArray = board.filter((cell) => cell.status === "isSnake");
  //   setSnake(snakeArray);
  // };

  // useEffect(() => {
  //   buildSnake();
  // }, [board]);

  // useEffect(() => {
  //   if (snake.length > 0) {
  //     setSnakeHead(snake[0]);
  //   }
  // }, [snake]);

  return snake;
};

export default Snake;
