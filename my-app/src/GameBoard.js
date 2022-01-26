import Cell from "./Cell";

const GameBoard = ({ buildBoard, isFood }) => {
  const board = buildBoard();

  // console.log(board);
  return (
    <div className="game-board">
      {board.map((cell) => (
        <Cell
          key={cell.row.toString() + "-" + cell.col.toString()}
          cell={cell}
          isFood={cell === isFood}
        ></Cell>
      ))}
    </div>
  );
};

export default GameBoard;
