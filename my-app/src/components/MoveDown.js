const MoveDown = (headID, length, rows) => {
  const moveToTop = rows * (rows - 1);
  const rowBelow = headID + rows;

  if (rowBelow <= length) {
    return headID + rows;
  } else {
    return headID - moveToTop;
  }
};

export default MoveDown;
