import "../css/Cell.css";

const Cell = ({ cell, inputDirection }) => {
  let classNamesContent = `content ${cell.status} ${inputDirection}`;
  let classNamesCell = `cell ${cell.status} ${inputDirection}`;

  return (
    <div className={classNamesCell}>
      <div className={classNamesContent}></div>
    </div>
  );
};

export default Cell;
