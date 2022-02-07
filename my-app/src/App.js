import { useState, useEffect } from "react";
import TitleBar from "./components/TitleBar";
import StartGame from "./components/StartGame";
import BoardInfo from "./components/BoardInfo";
import GameBoard from "./components/GameBoard";

// import GenerateFood from "./components/GenerateFood";
// import UpdateBoard from "./components/UpdateBoard";

function App() {
  console.log("App.js is rendering");

  const [rows, setRows] = useState();
  const [cols, setCols] = useState();
  const [board, setBoard] = useState([]);
  const [isGamePaused, setIsGamePaused] = useState(true);

  // const [snake, setSnake] = useState([]);
  // const [snakeHead, setSnakeHead] = useState();

  useEffect(() => {
    if (rows !== 0 && rows !== undefined) {
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
    }
  }, [rows, cols]);

  const handleBoardChange = (size) => {
    let target = parseInt(size);
    // console.log(target);

    setRows(target);
    setCols(target);
    // setIsSelected(true);
  };
  const handlePause = () => {
    if (isGamePaused) {
      setIsGamePaused(false);
    }
    if (isGamePaused === false) {
      setIsGamePaused(true);
    }
  };

  // const buildSnake = () => {
  //   let snakeArray = board.filter((cell) => cell.status === "isSnake");
  //   setSnake(snakeArray);
  // };

  // useEffect(() => {
  //   buildSnake();
  // }, [board]);

  // useEffect(() => {
  //   if (snake.length > 0) {
  //     setSnakeHead(snake[0]);
  //   }
  // }, [snake]);

  return (
    <div className="App">
      <StartGame
        handleBoardChange={handleBoardChange}
        isGamePaused={isGamePaused}
        handlePause={handlePause}
      />
      {board.length > 0 && (
        <BoardInfo
          rows={rows}
          cols={cols}
          board={board}
          isGamePaused={isGamePaused}
        />
      )}
      {rows && (
        <GameBoard board={board} rows={rows} isGamePaused={isGamePaused} />
      )}
    </div>
  );
}

export default App;
