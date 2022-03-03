import { useStatus } from "../hooks/useStatus";

const MoveRight = (headID, rows) => {
  // const { dimensions } = useStatus();
  const moveToFront = headID - (rows - 1);
  // console.log(headID);

  if (headID % rows !== 0) {
    // console.log("Going Right");
    return headID + 1;
  } else {
    // console.log("To the Front of Row");
    return moveToFront;
  }
};

export default MoveRight;
