import "../css/GameStatus.css";
import ReactDOM from "react-dom";
import { useStatus } from "../hooks/useStatus";

const GameStatus = ({ handleReset }) => {
  const { score } = useStatus();

  return ReactDOM.createPortal(
    <div className="GameStatus">
      <div>
        <h1>Opps, don't eat yourself!</h1>
        <p>Your Score: {score}</p>
        <button onClick={handleReset}>Try again?</button>
      </div>
    </div>,
    document.body
  );
};

export default GameStatus;
