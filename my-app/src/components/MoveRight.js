const MoveRight = (headID, rows) => {
  const moveToFront = headID - (rows - 1);
  if (headID % rows !== 0) {
    return headID + 1;
  } else {
    return moveToFront;
  }
};

export default MoveRight;
