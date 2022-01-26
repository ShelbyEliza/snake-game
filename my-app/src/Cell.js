const Cell = ({ cell, status }) => {
  // const setStyle = () => {
  //   if (status === "isFood") {
  //     return "isFood"
  //   }
  // }

  return (
    <div className="cell">
      <div className={status}>
        {/* {cell.row.toString() + "-" + cell.col.toString()} */}
      </div>
    </div>
  );
};

export default Cell;
