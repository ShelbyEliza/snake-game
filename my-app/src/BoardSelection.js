import { useState } from "react";
// import RenderGameBoard from "./RenderGameBoard";
import GameBoard from "./GameBoard";

const BoardSelection = (props) => {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  const handleBoardChange = (e) => {
    let target = parseInt(e.target.value);

    setRows(target);
    setCols(target);
    setIsSelected(true);
  };
  return (
    <div className="container">
      <div className="form-container">
        <form>
          <label>Pick Your GameBoard Size:</label>
          <select
            className="row-col-selection"
            value={rows}
            onChange={(e) => handleBoardChange(e)}
          >
            <option value={0}></option>
            <option value={6}>6 x 6</option>
            <option value={7}>7 x 7</option>
            <option value={8}>8 x 8</option>
          </select>
        </form>
        <div className="gameBoard-title">GameBoard: Ready to Play!</div>
      </div>
      {/* {isSelected === true && <RenderGameBoard rows={rows} cols={cols} />} */}
      {isSelected === true && <GameBoard rows={rows} cols={cols} />}
    </div>
  );
};

export default BoardSelection;
