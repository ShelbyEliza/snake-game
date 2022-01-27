const UpdateBoard = (board, snakeHead) => {
  let updatedBoard = board;
  console.log("hellooooo");

  updatedBoard.map((cell) => {
    if (cell.row === snakeHead.row && cell.col === snakeHead.col) {
      cell.status = "isSnakeHead";
    }
    return updatedBoard;
  });

  return updatedBoard;
};

export default UpdateBoard;
