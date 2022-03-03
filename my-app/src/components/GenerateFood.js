const GenerateFood = (cells, length) => {
  let randomCell = cells[Math.floor(Math.random() * length)];

  while (randomCell.status !== "notSnake") {
    randomCell = cells[Math.floor(Math.random() * length)];
  }
  randomCell.status = "isFood";
  return randomCell;
};

export default GenerateFood;
