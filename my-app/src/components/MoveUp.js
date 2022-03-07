const MoveUp = (headID, rows) => {
  const moveToBottom = rows * (rows - 1);
  const rowAbove = headID - rows;
  let idToReturn;

  if (rowAbove > 0) {
    idToReturn = headID - rows;
  } else {
    idToReturn = headID + moveToBottom;
  }
  return idToReturn;
};

export default MoveUp;
