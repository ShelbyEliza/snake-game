import { useStatus } from "../hooks/useStatus";

const MoveUp = (headID, rows) => {
  // const { dimensions } = useStatus();
  const moveToBottom = rows * (rows - 1);
  // console.log(headID);
  const rowAbove = headID - rows;
  let idToReturn;

  if (rowAbove > 0) {
    // console.log("Going Up");
    idToReturn = headID - rows;
  } else {
    // console.log("To the Bottom");
    idToReturn = headID + moveToBottom;
  }
  // console.log(idToReturn);
  return idToReturn;
};

export default MoveUp;
