import "../css/StartGame.css";
import { useState, useEffect } from "react";
import { useStatus } from "../hooks/useStatus";

const StartGame = ({ handleBoardChange }) => {
  const {
    pauseState,
    changePauseState,
    difficultyLevel,
    changeDifficultyLevel,
    score,
  } = useStatus();

  const [selection, setSelection] = useState(0);
  let styleSpacing = "center";

  if (selection) {
    styleSpacing = "space-between";
  }

  const handleDifficultyLevel = (level) => {
    changeDifficultyLevel(level);
  };

  const handlePause = () => {
    if (pauseState) {
      changePauseState(false);
    }
    if (pauseState === false) {
      changePauseState(true);
    }
  };

  useEffect(() => {
    handleBoardChange(selection);
  }, [selection, handleBoardChange]);

  return (
    <div
      className="StartGame"
      style={{
        justifyContent: styleSpacing,
      }}
    >
      {selection !== 0 && (
        <div className="conditional">
          <p className="score-label">Score</p>
          <p className="score">{score}</p>
        </div>
      )}
      {pauseState && (
        <form className="game-options">
          <div className="size-selection-container">
            <select
              className="row-col-selection"
              onChange={(e) => {
                setSelection(e.target.value);
                e.target.blur();
              }}
            >
              <option value={0}></option>
              <option value={7}>7 x 7</option>
              <option value={9}>9 x 9</option>
              <option value={11}>11 x 11</option>
            </select>
          </div>
          <div className="difficulty-container">
            <label>Hard</label>
            <input
              type="range"
              id="difficulty"
              min="250"
              max="1000"
              step="250"
              value={difficultyLevel}
              onChange={(e) => {
                handleDifficultyLevel(e.target.value);
                e.target.blur();
              }}
            />
            <label>Easy</label>
          </div>
        </form>
      )}
      {selection !== 0 && (
        <div className="conditional">
          <div className="button-container display-data">
            {pauseState && <button onClick={handlePause}>Start!</button>}
            {!pauseState && <button onClick={handlePause}>Pause!</button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default StartGame;
