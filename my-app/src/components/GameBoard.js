import Cell from "./Cell";
import "../css/GameBoard.css";

const GameBoard = ({ board, rows }) => {
  console.log("GameBoard.js is rendering");
  const size = rows * 60;

  // console.log(size);
  return (
    <div
      className="GameBoard"
      style={{
        width: `${size}px`,
        height: `${size}px`,
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
