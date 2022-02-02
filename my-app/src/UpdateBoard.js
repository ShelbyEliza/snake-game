const UpdateBoard = (board, snakeHead) => {
  // useEffect(() => {
  //   board.length > 0 && GenerateFood(board, totalCells);

  //   snakeHead && setBoard(UpdateBoard(board, snakeHead));
  // }, [snakeHead, snake]);
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
