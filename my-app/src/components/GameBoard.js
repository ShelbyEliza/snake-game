import Cell from "./Cell";
import "../css/GameBoard.css";

const GameBoard = ({ board, rows }) => {
  const size = rows * 60;
  return (
    <div
      className="GameBoard"
      style={{
        width: size,
        height: size,
      }}
    >
      {board.map((cell) => (
        <Cell
          key={cell.row.toString() + "-" + cell.col.toString()}
          cell={cell}
          status={cell.status}
        ></Cell>
      ))}
    </div>
  );
};

export default GameBoard;
