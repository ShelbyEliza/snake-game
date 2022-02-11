const MoveDown = (headID, rows, length) => {
  console.log(headID);
  const moveToTop = rows * (rows - 1);
  const rowBelow = headID + rows;

  if (rowBelow < length) {
    console.log("Going Down");
    return headID + rows;
  } else {
    console.log("To the Top");
    return headID - moveToTop;
  }
};

export default MoveDown;
