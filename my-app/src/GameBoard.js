import RenderCells from "./RenderCells";

const GameBoard = (props) => {
  let size;

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

  const gameBoard = new Array(props.rows);

  for (var i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = new Array(props.rows);
  }

  // // const renderCells = () => {
  // var counterRow = -1;
  // var spliceValue = 0;

  // for (let row = 0; row < props.rows; row++) {
  //   counterRow++;
  //   for (let col = 0; col < props.cols; col++) {
  //     if (spliceValue === props.rows) {
  //       spliceValue = 0;
  //     }

  //     if (counterRow === row) {
  //       // cell = (
  //       //   <div
  //       //     id={row.toString() + "-" + col.toString()}
  //       //     className="cell"
  //       //     key={row.toString() + "-" + col.toString()}
  //       //   >
  //       //     {row + 1}, {col + 1}
  //       //   </div>
  //       // );

  //       gameBoard[row].splice(spliceValue, 1, <Cells row={row} col={col} />);

  //       // gameBoard[row].splice(spliceValue, 1, cell);
  //       spliceValue++;
  //     }
  //   }
  // }
  // //   return gameBoard;
  // // };

  return (
    <div
      className="gameBoard"
      style={{
        width: changeSize(props.rows),
        height: changeSize(props.rows),
      }}
    >
      {/* {gameBoard} */}
      <RenderCells gameBoard={gameBoard} rows={props.rows} cols={props.cols} />
    </div>
  );
};

export default GameBoard;
