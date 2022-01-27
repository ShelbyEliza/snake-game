const Cell = ({ cell, status }) => {
  return (
    <div className="cell">
      <div className={status}>
        {cell.row.toString() + "-" + cell.col.toString()}
      </div>
    </div>
  );
};

export default Cell;
