import Cell from "./Cell";
import "../css/GameBoard.css";

const GameBoard = ({ board }) => {
  return (
    <div className="GameBoard">
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
