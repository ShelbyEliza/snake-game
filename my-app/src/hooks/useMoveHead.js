import { useState, useEffect } from "react";

export const useMoveHead = (rows, headRef, cellsArrayRef) => {
  const moveHeadUp = (headID) => {
    if (!(headID - rows) < cellsArrayRef.length) return headID - rows;
  };
  const moveHeadRight = (headID) => {
    return headID + 1;
  };
  const moveHeadDown = (headID) => {
    if (!(headID + rows) > cellsArrayRef.length) {
      return headID + rows;
    } else {
      return headID - rows * (rows - 1);
    }
  };
  const moveHeadLeft = (headID) => {
    return headID - 1;
  };

  return {};
};

// useEffect(() => {
//   if (rows && rows !== 0) {
//     let tempDirection = {
//       up: headRef.current.id - rows,
//       right: headRef.current.id + 1,
//       down: headRef.current.id + rows,
//       left: headRef.current.id - 1,
//     };
//     setDirection(tempDirection);
//   }
// }, [headRef, rows]);

// let cellsArray = cellsArrayRef.current.map((cell) => {
//   if (cell.id === headRef.current.id) {
//     // if (headRef.current.id + rows + rows > cellsArrayRef.length - 1) {

//     // }
//     return { ...cell, status: "notSnake" };
//   }
//   if (cell.id === headRef.current.id + rows) {
//     newHeadRef = cell;
//     return { ...cell, status: "isSnake" };
//   } else {
//     return cell;
//   }
// });
// cellsArrayRef.current = cellsArray;
// headRef.current = newHeadRef;
// setCells(cellsArray);
