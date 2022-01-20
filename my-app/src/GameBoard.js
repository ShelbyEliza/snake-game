import React from "react";
import { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

const GameBoard = () => {
  const [rows, setRow] = useState(6);
  const [cols, setCol] = useState(6);

  var counterRow = -1;
  var spliceValue = 0;

  const gameBoard = new Array(rows);

  for (var i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = new Array(cols);
  }
  console.log(gameBoard);

  for (let row = 0; row < rows; row++) {
    counterRow++;
    for (let col = 0; col < cols; col++) {
      if (counterRow === row) {
        if (spliceValue === rows) {
          spliceValue = 0;
        }
        // console.log(`spliceValue: ${spliceValue}, counterRow: ${counterRow} || row: ${row}, col: ${col}`);
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

  // useEffect((e) => {
  //   switch (e.target.value) {
  //     case 6:
  //       gameBoard.width("300px");
  //       gameBoard.height("300px");
  //       break;
  //     case 7:
  //       gameBoard.width("350px");
  //       gameBoard.height("350px");
  //       break;
  //     case 8:
  //       gameBoard.width("400px");
  //       gameBoard.height("400px");
  //       break;
  //     default:
  //       gameBoard.width("300px");
  //       gameBoard.height("300px");
  //   }
  // });

  console.log(gameBoard);

  return (
    <div className="container">
      <form onChange={useEffect}>
        <label>Pick Your GameBoard Size:</label>
        <select
          className="row-col-selection"
          value={rows}
          // onChange={handleChange}
          onChange={(e) => {
            setRow(e.target.value);
            setCol(e.target.value);
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

// if (e.target.value === 6) {
//   gameBoard.width("300px")
//   gameBoard.height("300px")
// }
// if (e.target.value === 7) {
//   gameBoard.width("350px")
//   gameBoard.height("350px")
// }
// if (e.target.value === 8) {
//   gameBoard.width("300px")
//   gameBoard.height("300px")
// }
