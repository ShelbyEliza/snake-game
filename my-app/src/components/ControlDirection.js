import MoveUp from "./MoveUp";
import MoveRight from "./MoveRight";
import MoveDown from "./MoveDown";
import MoveLeft from "./MoveLeft";

const ControlDirection = (headID, inputDirection, rows, length) => {
  let newHead;
  switch (inputDirection) {
    case "ArrowUp":
      newHead = MoveUp(headID, rows, length);
      break;
    case "ArrowRight":
      newHead = MoveRight(headID, rows, length);
      break;
    case "ArrowDown":
      newHead = MoveDown(headID, rows, length);
      break;
    case "ArrowLeft":
      newHead = MoveLeft(headID, rows, length);
      break;
    default:
      newHead = MoveDown(headID, rows, length);
  }
  return newHead;
};

export default ControlDirection;
