const MoveUp = (headID, rows, length) => {
  const moveToBottom = rows * (rows - 1);
  console.log(headID);
  const rowAbove = headID - rows;

  if (rowAbove > 0) {
    console.log("Going Up");
    return headID - rows;
  } else {
    console.log("To the Bottom");
    return headID + moveToBottom;
  }
};

export default MoveUp;
