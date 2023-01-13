import "../css/GameStatus.css";
import { useStatus } from "../hooks/useStatus";

const GameStatus = ({ handleReset, isGameLost, isGameWon }) => {
  const { score } = useStatus();
  let message;
  if (isGameLost) {
    message = "Opps, don't eat yourself!";
  }
  if (isGameWon) {
    message = "Congratulations! You've Won!";
  }

  return (
    <div className="GameStatus">
      <div>
        <h1>{message}</h1>
        <div className="score-box">
          <p className="score-report">Your Score: </p>
          <p className="score-report">{score}</p>
        </div>
        <button className="reset-button" onClick={handleReset}>
          Try again?
        </button>
      </div>
    </div>
  );
};

export default GameStatus;
