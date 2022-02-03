import "../css/BoardInfo.css";

const BoardInfo = ({ rows, cols, snake, board }) => {
  let snakeCell;
  let foodCell;

  board.forEach((cell) => {
    if (cell.status === "isSnake") {
      snakeCell = cell;
    }
    if (cell.status === "isFood") {
      foodCell = cell;
    }
  });

  return (
    <div className="BoardInfo">
      <div className="board-data">
        Board: {rows} x {cols}
      </div>
      {snakeCell && (
        <div className="board-data">
          Snake: {snakeCell.row} - {snakeCell.col}
        </div>
      )}
      {foodCell && (
        <div className="board-data">
          Food: {foodCell.row} - {foodCell.col}
        </div>
      )}
    </div>
  );
};

export default BoardInfo;
