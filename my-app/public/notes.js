// import React from "react";
// import { useState } from "react";
// // import GameBoard from "./GameBoard";
// import BoardSelection from "./BoardSelection";
// import Cell from "./Cell";

// const RenderGameBoard = (props) => {
//   const [rows, setRows] = useState();
//   const [cols, setCols] = useState();

//   // let size = 300;
//   let size;

//   const gameBoard = new Array(rows);

//   for (var i = 0; i < gameBoard.length; i++) {
//     gameBoard[i] = new Array(cols);
//   }

//   var counterRow = -1;
//   var spliceValue = 0;

//   for (let row = 0; row < rows; row++) {
//     counterRow++;
//     for (let col = 0; col < cols; col++) {
//       if (spliceValue === rows) {
//         spliceValue = 0;
//       }

//       if (counterRow === row) {
//         // let cell = (
//         //   <div
//         //     id={row.toString() + "-" + col.toString()}
//         //     className="cell"
//         //     key={row.toString() + "-" + col.toString()}
//         //   >
//         //     {row + 1}, {col + 1}
//         //   </div>
//         // );
//         // let cell = <Cell row={row} col={col} />;

//         gameBoard[row].splice(spliceValue, 1, <Cell row={row} col={col} />);
//         spliceValue++;
//       }
//     }
//   }

//   const changeSize = (rows) => {
//     // gameBoard width = number of rows/cols * width of cells;
//     if (rows === 6) {
//       size = 300;
//     }
//     if (rows === 7) {
//       size = 350;
//     }
//     if (rows === 8) {
//       size = 400;
//     }
//     return size;
//   };

//   return (
//     <div className="container">
//       <BoardSelection
//         rows={rows}
//         cols={cols}
//         setCols={setCols}
//         setRows={setRows}
//       />
//       {/* <GameBoard /> */}
//       <div
//         className="gameBoard"
//         style={{ width: changeSize(rows), height: changeSize(rows) }}
//       >
//         {gameBoard}
//       </div>
//     </div>
//   );
// };

// export default RenderGameBoard;

////////////////////////////////// BoardSelection:

// import { useState } from "react";
// import RenderGameBoard from "./RenderGameBoard";

// const BoardSelection = () => {
//   const [rows, setRows] = useState();
//   const [cols, setCols] = useState();
//   const [isSelected, setIsSelected] = false;

//   const handleBoardChange = (e) => {
//     let target = parseInt(e.target.value);

//     setRows(target);
//     setCols(target);
//     setIsSelected(true);
//   };

//   return (
//     <div className="form-container">
//       <form>
//         <label>Pick Your GameBoard Size:</label>
//         <select
//           className="row-col-selection"
//           // value={rows}
//           onChange={(e) => handleBoardChange(e)}
//         >
//           {/* <option value={0}></option> */}
//           <option value={6}>6 x 6</option>
//           <option value={7}>7 x 7</option>
//           <option value={8}>8 x 8</option>
//         </select>
//       </form>
//       <div className="gameBoard-title">GameBoard: Ready to Play!</div>
//       {isSelected === true && <RenderGameBoard rows={rows} cols={cols} />}
//     </div>
//   );
// };

// export default BoardSelection;

///////////////////////////////////////// RenderGameBoard:

// import React from "react";
// import GameBoard from "./GameBoard";

// const RenderGameBoard = (props) => {
//   let size;

//   const changeSize = (rows) => {
//     // gameBoard width = number of rows/cols * width of cells;
//     if (rows === 6) {
//       size = 300;
//     }
//     if (rows === 7) {
//       size = 350;
//     }
//     if (rows === 8) {
//       size = 400;
//     }
//     return size;
//   };

//   return (
//     <div className="game-board-container">
//       <GameBoard style={{ width: changeSize(props.rows), height: changeSize(props.rows) }}
//       rows={props.rows}/>
//     </div>
//   );
// };

// export default RenderGameBoard;

///////////////////////////////// GameBoard:

// import Cell from "./Cell";

// const GameBoard = (props) => {
//   const gameBoard = new Array(props.rows);

//   for (var i = 0; i < gameBoard.length; i++) {
//     gameBoard[i] = new Array(props.rows);
//   }

//   const renderCells = (cell) => {
//   var counterRow = -1;
//   var spliceValue = 0;

//   for (let row = 0; row < props.rows; row++) {
//     counterRow++;
//     for (let col = 0; col < props.cols; col++) {
//       if (spliceValue === props.rows) {
//         spliceValue = 0;
//       }

//       if (counterRow === row) {
//         // let cell = (
//         //   <div
//         //     id={row.toString() + "-" + col.toString()}
//         //     className="cell"
//         //     key={row.toString() + "-" + col.toString()}
//         //   >
//         //     {row + 1}, {col + 1}
//         //   </div>
//         // );

//         // gameBoard[row].splice(spliceValue, 1, <Cell row={row} col={col} />);
//         gameBoard[row].splice(spliceValue, 1, cell);
//         spliceValue++;
//       }
//     }
//   }
//   return
// }

//   return (
//     <div className="gameBoard">
//       {renderCells(<Cell />)}
//     </div>
//   )
// };

// export default GameBoard;
