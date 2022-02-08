import "../css/Cell.css";

const Cell = ({ cell, isGamePaused, board }) => {
  // console.log("Cell.js is rendering");

  return (
    <div className="Cell">
      <div className={cell.status}>
        <p className="cellRow">
          {/* {cellRow.toString()} - {cellCol.toString()} */}
        </p>
        {/* {cellRow.toString() + " - " + cellCol.toString()} */}
      </div>
    </div>
  );
};

export default Cell;
