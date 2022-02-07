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

  const [gamePaused, setGamePaused] = useState(true);
  const [time, setTime] = useState(0);

  // const [snake, setSnake] = useState([]);

  // const [snakeHead, setSnakeHead] = useState();

  let count;

  useEffect(() => {
    if (rows !== 0 && rows !== undefined) {
      console.log(rows);
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
      // console.log("Board Built");
    }
  }, [rows, cols]);

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

  // useEffect(() => {
  //   if (gamePaused === false) {
  //     setInterval(() => {
  //       // console.log(count);
  //       count++;
  //     }, 3000);
  //   }
  //   if (gamePaused === true) {
  //     clearInterval();
  //   }
  // }, [gamePaused, count]);

  // const handlePauseGame = () => {
  //   if (gamePaused === true) {
  //     // console.log("Starting");
  //     setGamePaused(false);
  //   } else {
  //     // console.log("Pausing");
  //     setGamePaused(true);
  //   }
  // };

  const handleBoardChange = (size) => {
    let target = parseInt(size);
    // console.log(target);

    setRows(target);
    setCols(target);
    // setIsSelected(true);
  };

  return (
    <div className="App">
      <TitleBar></TitleBar>
      <StartGame
        // gamePaused={gamePaused}
        // handlePauseGame={handlePauseGame}
        handleBoardChange={handleBoardChange}
      />
      {/* <div className="game-backdrop"> */}
      {board.length > 0 && <BoardInfo rows={rows} cols={cols} board={board} />}
      {rows && <GameBoard board={board} rows={rows} />}
      {/* </div> */}
    </div>
  );
}

export default App;
