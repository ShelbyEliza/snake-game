const CheckForOpposite = (previous, current) => {
  const acceptedCodes = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];

  if (!acceptedCodes.includes(current)) {
    return previous;
  }

  if (
    (previous === "ArrowUp" && current === "ArrowDown") ||
    (previous === "ArrowDown" && current === "ArrowUp") ||
    (previous === "ArrowRight" && current === "ArrowLeft") ||
    (previous === "ArrowLeft" && current === "ArrowRight")
  ) {
    return previous;
  } else {
    return current;
  }
};

export default CheckForOpposite;
