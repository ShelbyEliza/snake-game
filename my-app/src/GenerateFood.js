const GenerateFood = (board, totalCells) => {
  // console.log(board);
  let randomCell = board[Math.floor(Math.random() * totalCells)];

  while (randomCell.status !== "notSnake") {
    randomCell = board[Math.floor(Math.random() * totalCells)];
  }
  return randomCell;
};

export default GenerateFood;
