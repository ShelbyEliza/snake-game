// import { useState } from "react";

// const ModifySnakeBody = (
//   snakeBody,
//   newHead,
//   wasFoodEaten,
//   amountEaten,
//   cellsArray
// ) => {
//   const [snakes, setSnakes] = useState();

//   let start = amountEaten + 1;
//   let deleteCount = snakeBody.length - amountEaten;

//   // useEffect(() => {
//   //   setSnakes((prevSnakes) => {
//   //     prevSnakes.unshift(newHead);
//   //   });
//   // }, [newHead]);

//   // console.log(headRef);
//   let newBody = snakeBody;
//   newBody.unshift(newHead);

//   console.log(cellsArray[newHead.id - 1]);
//   if (wasFoodEaten) {
//     newBody.splice(start, deleteCount);
//   } else {
//     newBody.splice(start, 1);
//   }

//   newBody = newBody.map((cell) => {
//     return { ...cell, status: "isSnake" };
//   });
//   newBody[0].status = "isSnakeHead";
//   // console.log(newBody);

//   // console.log(newBody);
//   return newBody;
// };

// export default ModifySnakeBody;

const ModifySnakeBody = (
  snakeBody,
  newHead,
  wasFoodEaten,
  amountEaten,
  cellsArray
) => {
  // console.log(headRef);
  let newBody = snakeBody;
  let start = amountEaten + 1;
  let deleteCount = snakeBody.length - amountEaten;

  newBody.unshift(newHead);

  if (wasFoodEaten) {
    newBody.splice(start, deleteCount);
  } else {
    newBody.splice(start, 1);
  }

  newBody = newBody.map((cell) => {
    return { ...cell, status: "isSnake" };
  });
  newBody[0].status = "isSnakeHead";
  console.log(newBody);

  // console.log(newBody);
  return newBody;
};

export default ModifySnakeBody;
