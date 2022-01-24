import Cells from "./Cells";

const RenderCells = (props) => {
  var counterRow = -1;
  var spliceValue = 0;

  for (let row = 0; row < props.rows; row++) {
    counterRow++;
    for (let col = 0; col < props.cols; col++) {
      if (spliceValue === props.rows) {
        spliceValue = 0;
      }

      if (counterRow === row) {
        props.gameBoard[row].splice(
          spliceValue,
          1,
          <Cells row={row} col={col} />
        );
        spliceValue++;
      }
    }
  }

  return (
    <div className="gameBoard">
      {props.gameBoard}
      {/* <Cells /> */}
    </div>
  );
};

export default RenderCells;
