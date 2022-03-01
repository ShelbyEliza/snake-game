import "../css/StartGame.css";
import { useEffect, useState } from "react";
import { useStatus } from "../hooks/useStatus";

const StartGame = ({ handleBoardChange, isGamePaused, handlePause }) => {
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
      <form className="select-size">
        <label>Game Board Size:</label>
        <select
          className="row-col-selection"
          onChange={(e) => setSelection(e.target.value)}
        >
          <option value={0}></option>
          <option value={7}>7 x 7</option>
          <option value={9}>9 x 9</option>
          <option value={11}>11 x 11</option>
        </select>
      </form>
      {selection !== 0 && (
        <div className="conditional">
          <div className="button-container display-data">
            {isGamePaused && (
              <button onClick={handlePause}>
                <p className="button-text">Start Game!</p>
              </button>
            )}
            {!isGamePaused && <button onClick={handlePause}>Stop Game!</button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default StartGame;
