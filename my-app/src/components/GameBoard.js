import Cell from "./Cell";
import "../css/GameBoard.css";
import { useCell } from "../hooks/useCell";
// import { useTimer } from "../hooks/useTimer";
import { useTempHooks } from "../hooks/useTempHooks";

const GameBoard = ({ board, rows, isGamePaused }) => {
  console.log("GameBoard.js is rendering");
  const { cellArray } = useTempHooks(isGamePaused, board, rows);
  const { cells, snakes, snakeHead, mutableCells, timer } = useCell(
    isGamePaused,
    board,
    rows
  );
  const size = rows * 60;

  if (timer) {
    console.log(snakeHead, snakes, mutableCells, timer);
  }
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
        {/* {mutableCells
          ? mutableCells.map((cell) => (
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
            ))} */}
      </div>
      {/* {snakeHeads && (
        <div>
          <h1>{cells[0].status.toString()}</h1>
          <h1>{snakes[0].toString()}</h1>
          <h1>{snakeHeads.toString()}</h1>
        </div>
      )} */}
    </div>
  );
};

export default GameBoard;
