import RenderGameBoard from "./RenderGameBoard";
import TitleBar from "./TitleBar";

function App() {
  return (
    <div className="App">
      <TitleBar></TitleBar>
      <div className="content">
        <RenderGameBoard />
      </div>
    </div>
  );
}

export default App;
