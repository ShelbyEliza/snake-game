import "../css/StartGame.css";

const StartGame = ({ gamePaused, handlePauseGame }) => {
  console.log(gamePaused);
  return (
    <div className="StartGame">
      {gamePaused && <button onClick={handlePauseGame}>Start Game!</button>}
      {!gamePaused && <button onClick={handlePauseGame}>Stop Game!</button>}
    </div>
  );
};

export default StartGame;
