import "../css/Cell.css";
import { useState } from "react";

const Cell = ({ cell, status }) => {
  const [cellRow, setCellRow] = useState(cell.row);
  const [cellCol, setCellCol] = useState(cell.col);

  return (
    <div className="Cell">
      <div className={status}>
        {cellRow.toString() + "-" + cellCol.toString()}
      </div>
    </div>
  );
};

export default Cell;
