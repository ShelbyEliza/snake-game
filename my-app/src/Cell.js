import { useState } from "react";

const Cell = ({ cell, status }) => {
  const [cellProperty, setCellProperty] = useState(0);

  return (
    <div className="cell">
      <div className={status}>
        {cell.row.toString() + "-" + cell.col.toString()}
      </div>
    </div>
  );
};

export default Cell;
