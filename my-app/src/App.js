import TitleBar from "./TitleBar";
import Cell from "./Cell";
import { useState, useEffect } from "react";
import BoardInfo from "./BoardInfo";
// import GenerateFood from "./GenerateFood";
// import UpdateBoard from "./UpdateBoard";

function App() {
  const [rows, setRows] = useState(11);
  const [cols, setCols] = useState(11);
  const [gamePaused, setGamePaused] = useState(true);

  const [board, setBoard] = useState([]);
  const [snake, setSnake] = useState([]);
  const [snakeHead, setSnakeHead] = useState();

  const [time, setTime] = useState(0);
  // const [direction, setDirection] = useState("down");

  useEffect(() => {
    const totalCells = rows * rows;
    const midGrid = Math.floor(totalCells / 2);
    const initialFood = midGrid + rows + rows;

    let grid = [];
    let status = "notSnake";
    let id = 0;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        grid.push({
          row,
          col,
          status,
          id,
        });
        id++;
      }
    }
    grid[midGrid].status = "isSnake";
    grid[initialFood].status = "isFood";
    setBoard(grid);
    console.log("Board Built");
  }, [rows, cols]);

  const buildSnake = () => {
    let snakeArray = board.filter((cell) => cell.status === "isSnake");
    setSnake(snakeArray);
  };

  useEffect(() => {
    buildSnake();
  }, [board]);

  useEffect(() => {
    if (snake.length > 0) {
      console.log(snake);
      setSnakeHead(snake[0]);
    }
  }, [snake]);

  useEffect(() => {
    if (gamePaused === false) {
      setInterval(() => {
        setTime((t) => t + 1);
        // console.log(time);
      }, 3000);
      return () => clearInterval();
    }
  }, [gamePaused]);

  return (
    <div className="App">
      <TitleBar></TitleBar>
      <div className="start-game">
        {gamePaused && (
          <button onClick={() => setGamePaused(false)}>Start Game!</button>
        )}
        {!gamePaused && (
          <button onClick={() => setGamePaused(true)}>Stop Game!</button>
        )}
      </div>
      {snake.length > 0 && <BoardInfo snake={snake} />}
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
