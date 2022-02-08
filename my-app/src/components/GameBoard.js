import Cell from "./Cell";
import "../css/GameBoard.css";
import { useTimer } from "../hooks/useTimer";

const GameBoard = ({ board, rows, isGamePaused }) => {
  console.log("GameBoard.js is rendering");
  const { timer, cellArray } = useTimer(isGamePaused, board, rows);
  const size = rows * 60;

  return (
    <div>
      <div
        className="GameBoard"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {cellArray
          ? cellArray.map((cell) => (
              <Cell
                key={cell.row.toString() + "-" + cell.col.toString()}
                cell={cell}
                isGamePaused={isGamePaused}
                board={board}
              ></Cell>
            ))
          : board.map((cell) => (
              <Cell
                key={cell.row.toString() + "-" + cell.col.toString()}
                cell={cell}
                isGamePaused={isGamePaused}
                board={board}
              ></Cell>
            ))}
      </div>
    </div>
  );
};

export default GameBoard;
