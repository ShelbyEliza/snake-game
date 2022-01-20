import GameBoard from "./GameBoard";
import TitleBar from "./TitleBar";

function App() {
  return (
    <div className="App">
      <TitleBar></TitleBar>
      <div className="content">
        <GameBoard row={8} col={8} />
      </div>
    </div>
  );
}

export default App;
