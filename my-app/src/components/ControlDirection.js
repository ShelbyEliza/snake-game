import MoveUp from "./MoveUp";
import MoveRight from "./MoveRight";
import MoveDown from "./MoveDown";
import MoveLeft from "./MoveLeft";

const ControlDirection = (prevHeadRef, inputDirection, rows, length) => {
  let newHeadID;

  switch (inputDirection) {
    case "ArrowUp":
      newHeadID = MoveUp(prevHeadRef.id, rows);
      break;
    case "ArrowRight":
      newHeadID = MoveRight(prevHeadRef.id, rows);
      break;
    case "ArrowDown":
      newHeadID = MoveDown(prevHeadRef.id, length, rows);
      break;
    case "ArrowLeft":
      newHeadID = MoveLeft(prevHeadRef.id, rows);
      break;
    default:
      newHeadID = MoveDown(prevHeadRef.id, length, rows);
  }
  return newHeadID;
};

export default ControlDirection;
