import React from "react";
import { useState } from "react";

const GameBoard = () => {
  const [rows, setRows] = useState(6);
  const [cols, setCols] = useState(6);

  let size = 300;

  const gameBoard = new Array(rows);

  for (var i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = new Array(cols);
  }

  var counterRow = -1;
  var spliceValue = 0;

  for (let row = 0; row < rows; row++) {
    counterRow++;
    for (let col = 0; col < cols; col++) {
      if (spliceValue === rows) {
        spliceValue = 0;
      }

      if (counterRow === row) {
        // console.log(
        //   `spliceValue: ${spliceValue}, counterRow: ${counterRow} || row: ${row}, col: ${col}`
        // );
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

  const handleBoardChange = (e) => {
    let target = parseInt(e.target.value);

    setRows(target);
    setCols(target);
  };

  const changeSize = (rows) => {
    if (rows === 6) {
      size = 300;
    }
    if (rows === 7) {
      size = 350;
    }
    if (rows === 8) {
      size = 400;
    }
    return size;
  };

  return (
    <div className="container">
      <form>
        <label>Pick Your GameBoard Size:</label>
        <select
          className="row-col-selection"
          value={rows}
          onChange={(e) => handleBoardChange(e)}
        >
          <option value={6}>6 x 6</option>
          <option value={7}>7 x 7</option>
          <option value={8}>8 x 8</option>
        </select>
      </form>
      <div className="gameBoard-title">GameBoard:</div>
      <div className="gameBoard-container">
        <div
          className="gameBoard"
          style={{ width: changeSize(rows), height: changeSize(rows) }}
        >
          {gameBoard}
        </div>
      </div>
    </div>
  );
};

// gameBoard width = number of rows/cols * width of cells;
export default GameBoard;
