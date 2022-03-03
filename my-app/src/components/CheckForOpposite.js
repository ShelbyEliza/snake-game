const CheckForOpposite = (previous, current) => {
  const acceptedCodes = ["KeyW", "KeyD", "KeyS", "KeyA"];

  if (!acceptedCodes.includes(current)) {
    return previous;
  }

  if (
    (previous === "KeyW" && current === "KeyS") ||
    (previous === "KeyS" && current === "KeyW") ||
    (previous === "KeyA" && current === "KeyD") ||
    (previous === "KeyD" && current === "KeyA")
  ) {
    return previous;
  } else {
    return current;
  }
};

export default CheckForOpposite;
