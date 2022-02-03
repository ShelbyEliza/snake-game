import "../css/StartGame.css";
import { useEffect, useState } from "react";

const StartGame = ({ gamePaused, handlePauseGame, handleBoardChange }) => {
  const [selection, setSelection] = useState(0);
  // console.log(gamePaused);
  useEffect(() => {
    console.log(selection);
    handleBoardChange(selection);
  }, [selection, handleBoardChange]);

  return (
    <div className="StartGame">
      <form>
        <label>GameBoard Size:</label>
        <select
          className="row-col-selection"
          value={0}
          onChange={(e) => setSelection(e.target.value)}
        >
          <option value={0}></option>
          <option value={9}>9 x 9</option>
          <option value={7}>7 x 7</option>
          <option value={11}>11 x 11</option>
        </select>
      </form>
      {selection !== 0 && <div className="status">Ready to Play!</div>}

      {gamePaused && <button onClick={handlePauseGame}>Start Game!</button>}
      {!gamePaused && <button onClick={handlePauseGame}>Stop Game!</button>}
    </div>
  );
};

export default StartGame;
