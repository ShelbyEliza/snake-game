import "../css/Cell.css";

const Cell = ({ cell }) => {
  // console.log("Cell.js is rendering");

  return (
    <div className="Cell">
      <div className={cell.status}></div>
    </div>
  );
};

export default Cell;
