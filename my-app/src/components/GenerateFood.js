const GenerateFood = (cells, length) => {
  // console.log("Food is Generating");
  let randomCell = cells[Math.floor(Math.random() * length)];

  while (randomCell.status !== "notSnake") {
    randomCell = cells[Math.floor(Math.random() * length)];
  }
  // console.log(randomCell.status);
  randomCell.status = "isFood";
  return randomCell;
};

export default GenerateFood;
