import "../css/Cell.css";
import { useState, useEffect } from "react";

const Cell = ({ cell, isGamePaused, board }) => {
  // console.log("Cell.js is rendering");
  const [cellRow, setCellRow] = useState(cell.row);
  const [cellCol, setCellCol] = useState(cell.col);
  // const [timer, setTimer] = useState(0);
  // const [snake, setSnake] = useState([]);
  // const [snakeHead, setSnakeHead] = useState();

  // useEffect(() => {
  //   if (isGamePaused) {
  //     setTimer(0);
  //   }
  //   if (!isGamePaused) {
  //     const id = setInterval(() => {
  //       setTimer((c) => c + 1);
  //       console.log(timer);
  //     }, 3000);
  //     return () => clearInterval(id);
  //   }
  //   return { timer: timer };
  // }, [timer, isGamePaused]);

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
