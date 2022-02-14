import MoveUp from "./MoveUp";
import MoveRight from "./MoveRight";
import MoveDown from "./MoveDown";
import MoveLeft from "./MoveLeft";

const ControlDirection = (headID, event, rows, length) => {
  // console.log(event, headID);
  if (event === "ArrowUp") {
    // console.log(MoveUp(headID, rows));
    return MoveUp(headID, rows);
  }
  if (event === "ArrowRight") {
    return MoveRight(headID, rows);
  }
  if (event === "ArrowDown") {
    return MoveDown(headID, rows, length);
  }
  if (event === "ArrowLeft") {
    return MoveLeft(headID, rows);
  }
};

export default ControlDirection;
