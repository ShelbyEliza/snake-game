import { useState, useEffect } from "react";
import { useStatus } from "./hooks/useStatus";
import StartGame from "./components/StartGame";
import GameBoard from "./components/GameBoard";
import GameStatus from "./components/GameStatus";
import Modal from "./components/Modal";

function App() {
  const [rows, setRows] = useState();
  const [cols, setCols] = useState();
  const [board, setBoard] = useState([]);
  const [isGamePaused, setIsGamePaused] = useState(true);
  const [isGameLost, setIsGameLost] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const { changeDifficultyLevel, changePauseState, changeScore } = useStatus();
  const [initialHead, setInitialHead] = useState();
  const [initialFood, setInitialFood] = useState();
  const [resetToggle, setResetToggle] = useState();
  const [difficulty, setDifficulty] = useState(1000);

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
    }
  }, [rows, cols, resetToggle]);

  const handleBoardChange = (size) => {
    let target = parseInt(size);

    setRows(target);
    setCols(target);
  };
  const handlePause = () => {
    if (isGamePaused) {
      setIsGamePaused(false);
      changePauseState(false);
    }
    if (isGamePaused === false) {
      setIsGamePaused(true);
      changePauseState(true);
    }
  };

  const handleDifficultyLevel = (level) => {
    changeDifficultyLevel(-level);
  };

  const handleGameOver = (isGameLost, isGameWon) => {
    setIsGamePaused(true);
    if (isGameLost) {
      setIsGameLost(true);
    }
    if (isGameWon) {
      setIsGameWon(true);
    }
  };

  const handleReset = () => {
    changeScore(0);
    if (resetToggle) {
      setResetToggle(0);
    } else {
      setResetToggle(1);
    }
    setIsGameLost(false);
    setIsGameWon(false);
    console.log("Resetting");
  };
  // console.log(board);

  return (
    <div className="App">
      <StartGame
        handleBoardChange={handleBoardChange}
        isGamePaused={isGamePaused}
        handlePause={handlePause}
        handleDifficultyLevel={handleDifficultyLevel}
        difficulty={difficulty}
      />
      {/* <BoardInfo /> */}
      {(isGameLost || isGameWon) && (
        <Modal>
          <GameStatus
            handleReset={handleReset}
            isGameLost={isGameLost}
            isGameWon={isGameWon}
          />
        </Modal>
      )}
      {initialHead && board && (
        <GameBoard
          board={board}
          rows={rows}
          isGamePaused={isGamePaused}
          initialHead={initialHead}
          initialFood={initialFood}
          handleGameOver={handleGameOver}
        />
      )}
    </div>
  );
}

export default App;
