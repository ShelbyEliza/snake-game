import ControlDirection from "./ControlDirection";

const GetSnakeHead = (prevHeadRef, inputDirection, rows, length, cellsRef) => {
  let snakeHeadId = ControlDirection(
    prevHeadRef.current,
    inputDirection,
    rows,
    length
  );

  return cellsRef.current.find((cell) => cell.id === snakeHeadId);
};

export default GetSnakeHead;
