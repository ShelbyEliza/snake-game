import "../css/GameStatus.css";
import { useStatus } from "../hooks/useStatus";

const GameStatus = ({ handleReset }) => {
  const { score } = useStatus();

  return (
    <div className="GameStatus">
      <div>
        <h1>Opps, don't eat yourself!</h1>
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
