import { useState, useEffect } from "react";
import { useStatus } from "./hooks/useStatus";
import StartGame from "./components/StartGame";
import GameBoard from "./components/GameBoard";
import GameStatus from "./components/GameStatus";
import Modal from "./components/Modal";

function App() {
  const { dimensions, changeDimensions, changePauseState, changeScore } =
    useStatus();

  const [isGameLost, setIsGameLost] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [rows, setRows] = useState();
  const [board, setBoard] = useState([]);
  const [initialHead, setInitialHead] = useState();
  const [initialFood, setInitialFood] = useState();
  const [resetToggle, setResetToggle] = useState();
  // console.log(dimensions);

  useEffect(() => {
    if (dimensions !== 0 && dimensions !== undefined) {
      // console.log(dimensions);
      const totalCells = dimensions * dimensions;
      const midGrid = Math.floor(totalCells / 2);
      const initialFood = midGrid + dimensions + dimensions;

      let grid = [];
      let status = "notSnake";
      let id = 1;

      for (let row = 1; row < dimensions + 1; row++) {
        for (let col = 1; col < dimensions + 1; col++) {
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
  }, [dimensions, resetToggle]);

  // const handleBoardChange = (size) => {
  //   let target = parseInt(size);

  //   setRows(target);
  // };

  const handleBoardChange = (size) => {
    let target = parseInt(size);

    setRows(target);
    changeDimensions(target);
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
