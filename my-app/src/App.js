import TitleBar from "./TitleBar";
import Cell from "./Cell";
import GenerateFood from "./GenerateFood";
import { useState, useEffect } from "react";
import UpdateBoard from "./UpdateBoard";

function App() {
  const [rows, setRows] = useState(11);
  const [cols, setCols] = useState(11);
  const [totalCells, setTotalCells] = useState(rows * rows);
  const [midGrid, setMidGrid] = useState(Math.floor(totalCells / 2));
  const [initialFood, setInitialFood] = useState(midGrid + rows + cols);
  const [board, setBoard] = useState([]);
  const [status, setStatus] = useState("notSnake");
  const [snake, setSnake] = useState([]);
  const [snakeHead, setSnakeHead] = useState();
  const [direction, setDirection] = useState("down");

  const buildBoard = () => {
    let grid = [];

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
    grid[initialFood].status = "isFood";

    setBoard(grid);
    console.log("Board Built");
  };

  const addToSnake = () => {
    let snakeArray = board.filter(
      (cell) => cell.status === "isSnake" || cell.status === "snakeHead"
    );

    setSnake(snakeArray);
    setSnakeHead(snakeArray[0]);
  };

  // const moveSnake = () => {
  //   setSnakeHead(snake[0]);
  //   console.log(snakeHead);
  //   // console.log(board);
  // };

  useEffect(() => {
    buildBoard();
  }, []);

  useEffect(() => {
    addToSnake();
  }, []);

  useEffect(() => {
    board.length > 0 && GenerateFood(board, totalCells);

    snakeHead && setBoard(UpdateBoard(board, snakeHead));
  }, [snakeHead, snake]);

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
