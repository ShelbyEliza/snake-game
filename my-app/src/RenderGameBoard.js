import React from "react";
// import GameBoard from "./GameBoard";
import Cell from "./Cell";

const RenderGameBoard = (props) => {
  let size;

  const gameBoard = new Array(props.rows);

  for (var i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = new Array(props.cols);
  }

  var counterRow = -1;
  var spliceValue = 0;

  for (let row = 0; row < props.rows; row++) {
    counterRow++;
    for (let col = 0; col < props.cols; col++) {
      if (spliceValue === props.rows) {
        spliceValue = 0;
      }

      if (counterRow === row) {
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
    <div className="gameBoard-container">
      {/* <GameBoard>
      <Cell />
    </GameBoard>  */}
      <div
        className="gameBoard"
        style={{
          width: changeSize(props.rows),
          height: changeSize(props.rows),
        }}
      >
        {gameBoard}
      </div>
    </div>
  );
};

export default RenderGameBoard;
