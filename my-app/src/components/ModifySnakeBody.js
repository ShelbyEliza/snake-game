const ModifySnakeBody = (
  snakeBodyRef,
  newHead,
  wasFoodEaten,
  amountEatenRef
) => {
  let newBody = snakeBodyRef;
  let start = amountEatenRef + 1;
  let deleteCount = snakeBodyRef.length - amountEatenRef;

  if (wasFoodEaten) {
    newBody.unshift(newHead);
    newBody.splice(start, deleteCount);
  }
  if (!wasFoodEaten) {
    newBody.unshift(newHead);
    newBody.splice(start, 1);
  }

  newBody = newBody.map((cell) => {
    return { ...cell, status: "isSnake" };
  });
  newBody[0].status = "isSnakeHead";
  snakeBodyRef = newBody;

  return newBody;
};

export default ModifySnakeBody;
