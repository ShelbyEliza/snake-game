import React from "react";
import { useState } from "react";
// import ReactDOM from "react-dom";

const GameBoard = () => {
  const [size, setSize] = useState(6);
  const gameBoard = document.getElementsByClassName("gameBoard");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(gameBoard);

    // let boardSize = { size } * { size };

    // gameBoard.style.setProperty("--grid-rows", { size });
    // gameBoard.style.setProperty("--grid-cols", { size });

    // for (let i = 0; i < boardSize; i++) {
    //   // let cell = <div className="grid-cell">{i + 1}</div>;
    //   let cell = document.createElement("div");
    //   cell.innerText = i + 1;
    //   gameBoard.appendChild(cell);
    // }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Pick Your GameBoard Size:</label>
        <select
          className="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value={6}>6 x 6</option>
          <option value={7}>7 x 7</option>
          <option value={8}>8 x 8</option>
        </select>
        <button>Enter</button>
      </form>
      <div className="gameBoard">GameBoard Goes Here</div>
    </div>
  );
};

export default GameBoard;
