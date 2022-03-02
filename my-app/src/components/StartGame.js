import "../css/StartGame.css";
import { useEffect, useState } from "react";
import { useStatus } from "../hooks/useStatus";

const StartGame = ({
  handleBoardChange,
  isGamePaused,
  handlePause,
  handleDifficultyLevel,
}) => {
  const [selection, setSelection] = useState(0);

  const { score } = useStatus();

  useEffect(() => {
    handleBoardChange(selection);
  }, [selection, handleBoardChange]);

  return (
    <div className="StartGame">
      {selection !== 0 && (
        <div className="conditional">
          <p className="score-label">Score</p>
          <p className="score">{score}</p>
        </div>
      )}
      <form className="game-options">
        <div className="size-selection-container">
          <select
            className="row-col-selection"
            onChange={(e) => setSelection(e.target.value)}
          >
            <option value={0}></option>
            {/* <option value={3}>3 x 3</option> */}
            <option value={7}>7 x 7</option>
            <option value={9}>9 x 9</option>
            <option value={11}>11 x 11</option>
          </select>
        </div>
        <div className="difficulty-container">
          <label>Easy</label>
          <input
            type="range"
            id="difficulty"
            min="-1000"
            max="-250"
            step="250"
            onChange={(e) => handleDifficultyLevel(e.target.value)}
          />
          <label>Hard</label>
        </div>
      </form>
      {selection !== 0 && (
        <div className="conditional">
          <div className="button-container display-data">
            {isGamePaused && <button onClick={handlePause}>Start Game!</button>}
            {!isGamePaused && <button onClick={handlePause}>Stop Game!</button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default StartGame;
