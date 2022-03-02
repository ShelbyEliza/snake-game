import { useState, useEffect, useCallback, useMemo } from "react";
import { useStatus } from "./hooks/useStatus";
import StartGame from "./components/StartGame";
import GameBoard from "./components/GameBoard";
import GameStatus from "./components/GameStatus";
import Modal from "./components/Modal";

function App() {
  const { changeDifficultyLevel, changePauseState, changeScore } = useStatus();
  const [rows, setRows] = useState();
  const [cols, setCols] = useState();
  const [isGamePaused, setIsGamePaused] = useState(true);
  const [isGameLost, setIsGameLost] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [difficulty, setDifficulty] = useState(1000);
  const [resetToggle, setResetToggle] = useState();

  const createBoard = useCallback(() => {
    const boardData = {};
    if (rows) {
      const totalCells = rows * rows;
      const midGridID = Math.floor(totalCells / 2);
      const initialFoodID = midGridID + rows + rows;

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
      grid[midGridID].status = "isSnakeHead";
      grid[initialFoodID].status = "isFood";

      boardData.board = grid;
      boardData.initialFood = grid[initialFoodID];
      boardData.initialHead = grid[midGridID];
    }

    console.log(rows);
    return boardData;
  }, [rows, cols]);

  const boardData = useMemo(() => createBoard(), [createBoard]);

  if (rows) {
    console.log(boardData);
  }

  useEffect(() => {
    if (rows) {
      createBoard();
    }
  }, [rows, cols, resetToggle, createBoard]);

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

  return (
    <div className="App">
      <StartGame
        handleBoardChange={handleBoardChange}
        isGamePaused={isGamePaused}
        handlePause={handlePause}
        handleDifficultyLevel={handleDifficultyLevel}
        difficulty={difficulty}
      />
      {(isGameLost || isGameWon) && (
        <Modal>
          <GameStatus
            handleReset={handleReset}
            isGameLost={isGameLost}
            isGameWon={isGameWon}
          />
        </Modal>
      )}
      {rows && (
        <GameBoard
          board={boardData.board}
          rows={rows}
          isGamePaused={isGamePaused}
          initialHead={boardData.initialHead}
          initialFood={boardData.initialFood}
          handleGameOver={handleGameOver}
        />
      )}
    </div>
  );
}

export default App;
