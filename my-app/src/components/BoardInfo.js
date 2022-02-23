import "../css/BoardInfo.css";

import { useStatus } from "../hooks/useStatus";

const BoardInfo = ({ rows, cols, board }) => {
  const { overStatus, wonStatus, lostStatus, score } = useStatus();

  return (
    <div className="BoardInfo">
      <div className="board-data">
        Is Game Over?
        {overStatus ? (
          <p className="data"> Yes </p>
        ) : (
          <p className="data"> No </p>
        )}
      </div>
      <div className="board-data">
        Won:{" "}
        {wonStatus ? (
          <p className="data"> Yes </p>
        ) : (
          <p className="data"> No </p>
        )}
      </div>

      <div className="board-data">
        Lost:{" "}
        {lostStatus ? (
          <p className="data"> Yes </p>
        ) : (
          <p className="data"> No </p>
        )}
      </div>

      <div className="board-data">
        Score: <p className="data">{score}</p>
      </div>
    </div>
  );
};

export default BoardInfo;
