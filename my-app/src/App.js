import TitleBar from "./components/TitleBar";
import { useState, useEffect } from "react";
import BoardInfo from "./components/BoardInfo";
import GameBoard from "./components/GameBoard";
import StartGame from "./components/StartGame";
// import GenerateFood from "./components/GenerateFood";
// import UpdateBoard from "./components/UpdateBoard";

const rows = 11;
const cols = 11;

function App() {
  const [gamePaused, setGamePaused] = useState(true);
  const [time, setTime] = useState(0);

  const [board, setBoard] = useState([]);
  const [snake, setSnake] = useState([]);

  const [snakeHead, setSnakeHead] = useState();

  let count;

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
  }, []);

  const buildSnake = () => {
    let snakeArray = board.filter((cell) => cell.status === "isSnake");
    setSnake(snakeArray);
  };

  useEffect(() => {
    buildSnake();
  }, [board]);

  useEffect(() => {
    if (snake.length > 0) {
      setSnakeHead(snake[0]);
    }
  }, [snake]);

  useEffect(() => {
    if (gamePaused === false) {
      setInterval(() => {
        console.log(count);
        count++;
      }, 3000);
    }
    if (gamePaused === true) {
      clearInterval();
    }
  }, [gamePaused, count]);

  const handlePauseGame = () => {
    if (gamePaused === true) {
      console.log("Starting");
      setGamePaused(false);
    } else {
      console.log("Pausing");
      setGamePaused(true);
    }
  };

  return (
    <div className="App">
      <TitleBar></TitleBar>
      {snake.length > 0 && (
        <BoardInfo rows={rows} cols={cols} snake={snake} board={board} />
      )}
      <StartGame gamePaused={gamePaused} handlePauseGame={handlePauseGame} />
      {board && <GameBoard board={board} />}
    </div>
  );
}

export default App;
