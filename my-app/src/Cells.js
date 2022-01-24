// import { useEffect, useState } from "react";

const Cells = (props) => {
  // const [isFood, setIsFood] = useState(false);
  // const [isSnakeHead, setIsSnakeHead] = useState(false);

  // const pickRandomCell = () => {
  //   return (

  // }

  return (
    <div
      row="row"
      col="col"
      className="cell"
      key={props.row.toString() + "-" + props.col.toString()}
    >
      {props.row + 1}, {props.col + 1}
    </div>
  );
};

export default Cells;
