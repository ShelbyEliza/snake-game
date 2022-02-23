import "../css/StartGame.css";
import { useEffect, useState } from "react";

const StartGame = ({ handleBoardChange, isGamePaused, handlePause }) => {
  const [selection, setSelection] = useState(0);

  useEffect(() => {
    handleBoardChange(selection);
  }, [selection, handleBoardChange]);

  return (
    <div className="StartGame">
      <form className="select-size">
        <label>GameBoard Size:</label>
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
        <div className="button-container">
          {isGamePaused && <button onClick={handlePause}>Start Game!</button>}
          {!isGamePaused && <button onClick={handlePause}>Stop Game!</button>}
        </div>
      )}
    </div>
  );
};

export default StartGame;
