import { useStatus } from "../hooks/useStatus";

const MoveDown = (headID, length, rows) => {
  // const { dimensions } = useStatus();
  // console.log(dimensions);

  const moveToTop = rows * (rows - 1);
  const rowBelow = headID + rows;

  if (rowBelow <= length) {
    return headID + rows;
  } else {
    return headID - moveToTop;
  }
};

export default MoveDown;
