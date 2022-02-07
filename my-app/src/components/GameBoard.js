import Cell from "./Cell";
import "../css/GameBoard.css";
import { useTimer } from "../hooks/useTimer";

const GameBoard = ({ board, rows, isGamePaused }) => {
  console.log("GameBoard.js is rendering");
  const { timer: time } = useTimer(isGamePaused);
  const size = rows * 60;

  console.log(time);
  return (
    <div>
      {time && <div className="timer">{time}</div>}
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
            // status={cell.status}
          ></Cell>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
