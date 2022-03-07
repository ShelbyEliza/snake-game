import { useState, useEffect } from "react";
import { useStatus } from "./hooks/useStatus";
import StartGame from "./components/StartGame";
import GameBoard from "./components/GameBoard";
import GameStatus from "./components/GameStatus";
import Modal from "./components/Modal";

function App() {
  const { changeDimensions, changePauseState, changeScore } = useStatus();

  const [isGameLost, setIsGameLost] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [rows, setRows] = useState();
  const [board, setBoard] = useState([]);
  const [initialHead, setInitialHead] = useState();
  const [initialFood, setInitialFood] = useState();
  const [resetToggle, setResetToggle] = useState();

  useEffect(() => {
    if (rows !== 0 && rows !== undefined) {
      const totalCells = rows * rows;
      const midGrid = Math.floor(totalCells / 2);
      const initialFood = midGrid + rows + rows;

      let grid = [];
      let status = "notSnake";
      let id = 1;

      for (let row = 1; row < rows + 1; row++) {
        for (let col = 1; col < rows + 1; col++) {
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
  }, [rows, resetToggle]);

  const handleBoardChange = (size) => {
    let target = parseInt(size);

    setRows(target);
  };

  const handleGameOver = (isGameLost, isGameWon) => {
    changePauseState(true);
    if (isGameLost) {
      setIsGameLost(true);
    }
    if (isGameWon) {
      setIsGameWon(true);
    }
  };

  const handleReset = () => {
    changeScore(0);
    setRows(0);
    changeDimensions(0);
    if (resetToggle) {
      setResetToggle(0);
    } else {
      setResetToggle(1);
    }
    setIsGameLost(false);
    setIsGameWon(false);
  };

  return (
    <div className="App">
      <StartGame handleBoardChange={handleBoardChange} />
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
          initialHead={initialHead}
          initialFood={initialFood}
          handleGameOver={handleGameOver}
        />
      )}
    </div>
  );
}

export default App;
