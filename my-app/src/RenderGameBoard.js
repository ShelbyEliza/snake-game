import React from "react";
import { useState } from "react";
import BoardSelection from "./BoardSelection";
import Cell from "./Cell";

const RenderGameBoard = (props) => {
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
        // let cell = (
        //   <div
        //     id={row.toString() + "-" + col.toString()}
        //     className="cell"
        //     key={row.toString() + "-" + col.toString()}
        //   >
        //     {row + 1}, {col + 1}
        //   </div>
        // );
        // let cell = <Cell row={row} col={col} />;

        gameBoard[row].splice(spliceValue, 1, <Cell row={row} col={col} />);
        spliceValue++;
      }
    }
  }

  const changeSize = (rows) => {
    // gameBoard width = number of rows/cols * width of cells;
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
      <BoardSelection
        rows={rows}
        cols={cols}
        setCols={setCols}
        setRows={setRows}
      />
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

export default RenderGameBoard;
