import "../css/Cell.css";

const Cell = ({ cell }) => {
  return (
    <div className="Cell">
      <div className={cell.status}>{cell.id}</div>
    </div>
  );
};

export default Cell;
