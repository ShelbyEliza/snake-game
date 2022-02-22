import "../css/Score.css";

const Score = ({ score, size }) => {
  return (
    <div
      className="score"
      // style={{
      //   width: `${size}px`,
      // }}
    >
      <div className="score-data">Score: {score}</div>
    </div>
  );
};

export default Score;
