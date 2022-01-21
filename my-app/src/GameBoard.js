import React from "react";
import { useState } from "react";
// import { BoardSelection } from "./BoardSelection";

const GameBoard = () => {
  const [rows, setRows] = useState(6);
  const [cols, setCols] = useState(6);
  const gameBoard = new Array(rows);

  for (var i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = new Array(cols);
  }

  console.log(rows, cols);
  console.log(`gameBoard: ${gameBoard}`);

  var counterRow = -1;
  var spliceValue = 0;

  for (let row = 0; row < rows; row++) {
    counterRow++;
    for (let col = 0; col < cols; col++) {
      if (counterRow === row) {
        if (spliceValue === rows) {
          spliceValue = 0;
        }
        console.log(
          `spliceValue: ${spliceValue}, counterRow: ${counterRow} || row: ${row}, col: ${col}`
        );
        gameBoard[row].splice(
          spliceValue,
          1,
          <div className="cell" key={row.toString() + "-" + col.toString()}>
            {row + 1}, {col + 1}
          </div>
        );
        spliceValue++;
      }
    }
  }

  console.log(gameBoard);

  return (
    <div className="container">
      <form>
        <label>Pick Your GameBoard Size:</label>
        <select
          className="row-col-selection"
          value={rows}
          onChange={(e) => {
            // BoardSelection(e.target.value, gameBoard)
            setRows(e.target.value);
            setCols(e.target.value);
          }}
        >
          <option value={6}>6 x 6</option>
          <option value={7}>7 x 7</option>
          <option value={8}>8 x 8</option>
        </select>
      </form>
      <div className="gameBoard-title">GameBoard Goes Below</div>
      <div className="gameBoard-container">
        <div className="gameBoard">{gameBoard}</div>
      </div>
    </div>
  );
};

// gameBoard width = number of rows/cols * width of cells;
export default GameBoard;
