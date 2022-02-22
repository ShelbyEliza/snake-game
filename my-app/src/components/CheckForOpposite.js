const CheckForOpposite = (previous, current) => {
  let checkedDirection = current;

  if (
    (previous === "ArrowUp" && current === "ArrowDown") ||
    (previous === "ArrowDown" && current === "ArrowUp") ||
    (previous === "ArrowLeft" && current === "ArrowRight") ||
    (previous === "ArrowRight" && current === "ArrowLeft")
  ) {
    checkedDirection = previous;
  }

  return checkedDirection;
};

export default CheckForOpposite;
