const MoveLeft = (headID, rows) => {
  const moveToEnd = headID + (rows - 1);

  if (moveToEnd % rows !== 0) {
    return headID - 1;
  } else {
    return moveToEnd;
  }
};

export default MoveLeft;
