// let testArray = [];

// // newBody.map((segment) => {
// //   let tempCell = cellsArray.find((cell) => cell.id === segment.id);
// //   cellsArray
// // });
// console.log(cellsArray);
// let count = 0;
// cellsArray.filter((cell) => {
//   count++;

//   let tempCell = newBody.find((segment) => segment.id === cell.id);
//   if (tempCell) {
//     console.log(tempCell);
//     return tempCell;
//   } else if (cell.status === "isFood") {
//     return cell;
//   } else {
//     return { ...cell, status: "notSnake" };
//   }
// });
// console.log(count);
// // console.log(newBody);
// console.log(cellsArray);

// console.log(cellsArray[38]);
// console.log(cellsArray[45]);

// console.log(newBody[0]);
// console.log(newBody[1]);

// cellsArray.forEach((cell) => {
//   if (newBody.includes(cell)) {
//     console.log(cell);
//     // console.log(newBody.at(cell.id - 1));
//   }
// });

// cellsArray.map((cell) => {
//   if (newBody.includes(cell)) {
//     console.log(newBody.at(cell.id - 1))
//   }
// })

// console.log(newBody);

// for (var i = 0; i < cellsArray.length; i++) {
//   for (var j = 0; j < newBody.length; j++) {
//     if (cellsArray[i].id === newBody[j].id) {
//       cellsArray[i] = newBody[j];
//     }
//   }
// }

// let lastSegment = newBody[newBody.length - 1];
// let startingSegment = newBody[0].id - 1;

// if (amountEatenRef === 0) {
//   cellsArray.splice(startingSegment, 1, newBody[0]);
// }
// // if (wasFoodEaten) {
//   newBody.splice(start, deleteCount);
//   cellsArray.splice(lastSegment.id - 1, 1, lastSegment);
// } else {
//   cellsArray.splice(lastSegment.id - 1, 1, {
//     ...lastSegment,
//     status: "notSnake",
//   });
//   newBody.splice(start, 1);
// }

// const BuildCells = (
//   cellsRef, // initially = board
//   newHead, // Head to be rendered
//   snakeBodyRef, // snake body on last render - initially empty array
//   wasFoodEaten, // did food get eaten last render
//   amountEatenRef, // how many segments/food eaten
//   foodRef
// ) => {
//   let newBody = snakeBodyRef;
//   // console.log(newBody);
//   let start = amountEatenRef + 1;
//   let deleteCount = snakeBodyRef.length - amountEatenRef;

//   newBody.unshift(newHead);

//   // newBody = newBody.map((cell) => {
//   //   return { ...cell, status: "isSnake" };
//   // });
//   newBody = newBody.map((segment) => {
//     if (newBody[0] === segment) {
//       return segment;
//     } else {
//       return { ...segment, status: "isSnake" };
//     }
//   });

//   // console.log(newBody);

//   let cellsArray = cellsRef.map((cell) => {
//     if (cell.id === newHead.id && cell.status === "isFood") {
//       wasFoodEaten = true;
//       amountEatenRef++;
//     }
//     let matchingSegment = newBody.find((segment) => segment.id === cell.id);
//     if (matchingSegment) {
//       return matchingSegment;
//     } else if (cell.id === foodRef.id) {
//       return foodRef;
//     } else {
//       return cell;
//     }
//   });

//   if (wasFoodEaten) {
//     newBody.splice(start, deleteCount);
//   } else {
//     newBody.splice(start, 1);
//   }

//   snakeBodyRef = newBody;

//   console.log(snakeBodyRef);
//   return cellsArray;
// };

// export default BuildCells;

//////////// GameBoard /////////////////////
// useEffect(() => {
//   if (timer) {
//     const notFood = (cell) => cell.status !== "isFood";

//     let wasFoodEaten = false;
//     let newHead = ControlDirection(
//       prevHeadRef.current,
//       inputDirection,
//       rows,
//       length
//     );

//     let cellsArray = cellsRef.current.map((cell) => {
//       if (cell.id === prevHeadRef.current.id) {
//         return { ...cell, status: "notSnake" };
//       }
//       if (cell.id === newHead) {
//         if (cell.status === "isFood") {
//           wasFoodEaten = true;
//           amountEatenRef.current++;
//         }
//         cell.status = "isSnakeHead";
//         newHead = cell;
//         return cell;
//       } else {
//         return cell;
//       }
//     });

//     if (cellsArray.every(notFood)) {
//       foodRef.current = GenerateFood(cellsArray, length);
//       cellsArray[foodRef.current.id - 1] = foodRef.current;
//     }

//     let newBody = ModifySnakeBody(
//       snakeBodyRef.current,
//       newHead,
//       wasFoodEaten,
//       amountEatenRef.current,
//       cellsArray
//     );

//     // console.log(newBody);
//     cellsRef.current = cellsArray;
//     prevHeadRef.current = newHead;
//     setCells(cellsArray);
//   }
// }, [timer, rows, length, inputDirection]);
