import MoveUp from "./directions/MoveUp";
import MoveRight from "./directions/MoveRight";
import MoveDown from "./directions/MoveDown";
import MoveLeft from "./directions/MoveLeft";

const ControlDirection = (prevHeadRef, inputDirection, rows, length) => {
  let newHeadID;

  switch (inputDirection) {
    case "KeyW":
      newHeadID = MoveUp(prevHeadRef.id, rows, length);
      break;
    case "KeyD":
      newHeadID = MoveRight(prevHeadRef.id, rows, length);
      break;
    case "KeyS":
      newHeadID = MoveDown(prevHeadRef.id, rows, length);
      break;
    case "KeyA":
      newHeadID = MoveLeft(prevHeadRef.id, rows, length);
      break;
    default:
      newHeadID = MoveDown(prevHeadRef.id, rows, length);
  }
  return newHeadID;
};

export default ControlDirection;
