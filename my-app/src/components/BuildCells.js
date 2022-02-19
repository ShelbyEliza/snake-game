import ModifySnakeBody from "./ModifySnakeBody";
import { useEffect } from "react";

const BuildCells = (
  newHeadID,
  cellsRef,
  prevHeadRef,
  amountEatenRef,
  prevSnakeRef
) => {
  let wasFoodEaten = false;

  cellsRef.current[newHeadID - 1].status = "isSnakeHead";
  let newHead = cellsRef.current[newHeadID - 1];
  console.log(newHead);

  // let newCells = cellsRef.current.map((cell) => {
  //   if (cell.id === prevHeadRef.current.id) {
  //     return { ...cell, status: "notSnake" };
  //   }
  //   if (cell.id === newHead) {
  //     if (cell.status === "isFood") {
  //       wasFoodEaten = true;
  //       amountEatenRef.current++;
  //     }
  //     cell.status = "isSnakeHead";
  //     newHead = cell;
  //     return cell;
  //   } else {
  //     return cell;
  //   }
  // });

  // let newBody = ModifySnakeBody(
  //   prevSnakeRef.current,
  //   newHead,
  //   wasFoodEaten,
  //   amountEatenRef.current,
  //   newCells
  // );

  // // console.log(newBody);
  // prevCellsRef.current = newCells;
  // prevHeadRef.current = newHead;

  let newCells;
  return newCells;
};

export default BuildCells;

// useEffect(() => {}, [inputDirection]);

// if (timer) {
//   const newHeadID = ControlDirection(
//     prevHeadRef.current,
//     inputDirection,
//     rows,
//     length
//   );
//   const newCells = BuildCells(newHeadID, cellsRef, prevHeadRef);

//   if (newCells.every(notFood)) {
//     foodRef.current = GenerateFood(newCells, length);
//     newCells[foodRef.current.id - 1] = foodRef.current;
//   }
// }

//   useEffect(() => {
//   setCells(newCells);
// }, [timer, newCells]);
