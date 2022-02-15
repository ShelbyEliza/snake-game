import MoveUp from "./MoveUp";
import MoveRight from "./MoveRight";
import MoveDown from "./MoveDown";
import MoveLeft from "./MoveLeft";

const ModifySnakeBody = (snakeBody, inputDirection, rows, length, headRef) => {
  let newBody = snakeBody;
  console.log(newBody);
  switch (inputDirection) {
    case "ArrowUp":
      newBody = snakeBody.map((cell) => MoveUp(cell.id, rows, length));
      break;
    case "ArrowRight":
      newBody = snakeBody.map((cell) => MoveRight(cell.id, rows, length));
      break;
    case "ArrowDown":
      newBody = snakeBody.map((cell) => MoveDown(cell.id, rows, length));
      break;
    case "ArrowLeft":
      newBody = snakeBody.map((cell) => MoveLeft(cell.id, rows, length));
      break;
    default:
      newBody = snakeBody.map((cell) => MoveDown(cell.id, rows, length));
  }
  console.log(newBody);
  return newBody;
};

export default ModifySnakeBody;
