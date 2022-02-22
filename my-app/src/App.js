import { useState, useEffect } from "react";
import StartGame from "./components/StartGame";
import BoardInfo from "./components/BoardInfo";
import GameBoard from "./components/GameBoard";

function App() {
  // console.log("App.js is rendering");

  const [rows, setRows] = useState();
  const [cols, setCols] = useState();
  const [board, setBoard] = useState([]);
  const [isGamePaused, setIsGamePaused] = useState(true);
  const [initialHead, setInitialHead] = useState();
  const [initialFood, setInitialFood] = useState();

  useEffect(() => {
    if (rows !== 0 && rows !== undefined) {
      const totalCells = rows * rows;
      const midGrid = Math.floor(totalCells / 2);
      const initialFood = midGrid + rows + rows;

      let grid = [];
      let status = "notSnake";
      let id = 1;

      for (let row = 1; row < rows + 1; row++) {
        for (let col = 1; col < cols + 1; col++) {
          grid.push({
            row,
            col,
            status,
            id,
          });
          id++;
        }
      }
      grid[midGrid].status = "isSnakeHead";
      grid[initialFood].status = "isFood";

      setInitialHead(grid[midGrid]);
      setInitialFood(grid[initialFood]);
      setBoard(grid);
      // console.log("Board Built");
    }
  }, [rows, cols]);

  const handleBoardChange = (size) => {
    let target = parseInt(size);

    setRows(target);
    setCols(target);
  };
  const handlePause = () => {
    if (isGamePaused) {
      setIsGamePaused(false);
    }
    if (isGamePaused === false) {
      setIsGamePaused(true);
    }
  };

  return (
    <div className="App">
      <StartGame
        handleBoardChange={handleBoardChange}
        isGamePaused={isGamePaused}
        handlePause={handlePause}
      />
      {/* {board.length > 0 && <BoardInfo rows={rows} cols={cols} board={board} />} */}
      {initialHead && board && (
        <GameBoard
          board={board}
          rows={rows}
          isGamePaused={isGamePaused}
          initialHead={initialHead}
          initialFood={initialFood}
        />
      )}
    </div>
  );
}

export default App;
