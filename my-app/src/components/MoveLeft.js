import { useStatus } from "../hooks/useStatus";

const MoveLeft = (headID, rows) => {
  // const { dimensions } = useStatus();
  const moveToEnd = headID + (rows - 1);
  // console.log(headID);

  if (moveToEnd % rows !== 0) {
    // console.log("Going Left");
    return headID - 1;
  } else {
    // console.log("To the End of Row");
    return moveToEnd;
  }
};

export default MoveLeft;
