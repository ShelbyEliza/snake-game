import { useState, useEffect } from "react";
import StartGame from "./components/StartGame";
import BoardInfo from "./components/BoardInfo";
import GameBoard from "./components/GameBoard";

function App() {
  console.log("App.js is rendering");

  const [rows, setRows] = useState();
  const [cols, setCols] = useState();
  const [board, setBoard] = useState([]);
  const [isGamePaused, setIsGamePaused] = useState(true);

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
