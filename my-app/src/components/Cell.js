import "../css/Cell.css";
import { useState } from "react";

const Cell = ({ cell, status }) => {
  console.log("Cell.js is rendering");
  const [cellRow, setCellRow] = useState(cell.row);
  const [cellCol, setCellCol] = useState(cell.col);

  return (
    <div className="Cell">
      <div className={status}>
        <p className="cellRow">
          {/* {cellRow.toString()} - {cellCol.toString()} */}
        </p>
        {/* {cellRow.toString() + " - " + cellCol.toString()} */}
      </div>
    </div>
  );
};

export default Cell;
