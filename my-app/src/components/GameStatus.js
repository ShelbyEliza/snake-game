const GameStatus = ({
  winStatus,
  loseStatus,
  score,
  resetBoard,
  resetStatus,
}) => {
  const handleReset = () => {
    resetBoard(true);
    resetStatus();
  };

  return (
    <div className="GameStatus">
      <div>
        <h1>Opps, don't eat yourself!</h1>
        <p>Your Score: {score}</p>
        <button onClick={handleReset}>Try again?</button>
      </div>
    </div>
  );
};

export default GameStatus;
