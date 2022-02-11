import "../css/Cell.css";

const Cell = ({ cell }) => {
  // console.log("Cell.js is rendering");

  return (
    <div className="Cell">
      <div className={cell.status}>{cell.id}</div>
    </div>
  );
};

export default Cell;
