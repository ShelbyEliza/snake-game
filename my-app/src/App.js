import TitleBar from "./TitleBar";
import Cell from "./Cell";
import { useState, useEffect } from "react";

function App() {
  const [rows, setRows] = useState(11);
  const [cols, setCols] = useState(11);
  const [board, setBoard] = useState([]);
  const [status, setStatus] = useState("isNormal");
  const [direction, setDirection] = useState("down");
  const [snake, setSnake] = useState([]);

  const totalCells = rows * rows;
  const midGrid = Math.floor(totalCells / 2);

  // let board;

  useEffect(() => {
    const buildBoard = () => {
      var grid = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          grid.push({
            row,
            col,
            status,
          });
        }
      }
      grid[midGrid].status = "isSnake";
      grid[midGrid + rows + cols].status = "isFood";

      return grid;
    };
    setBoard(buildBoard());
  }, [rows, cols]);

  // buildBoard();
  // // board.push(grid);

  // setBoard((prevBoard) => {
  //   return (prevBoard = [...grid]);
  //   // return grid.forEach((cell) => {
  //   //   prevBoard.push(cell);
  //   // });
  // });

  console.log(board);
  // const board = buildBoard();

  const snakeHead = board[midGrid];
  snake.push(snakeHead);
  console.log(snakeHead);

  const makeFood = () => {
    let random = Math.floor(Math.random() * totalCells);

    return random;
  };

  return (
    <div className="App">
      <TitleBar></TitleBar>
      <div className="content">
        {board && (
          <div className="game-board">
            {board.map((cell) => (
              <Cell
                key={cell.row.toString() + "-" + cell.col.toString()}
                cell={cell}
                status={cell.status}
              ></Cell>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
