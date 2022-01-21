const BoardSelection = (props) => {
  const handleBoardChange = (e) => {
    let target = parseInt(e.target.value);

    props.setRows(target);
    props.setCols(target);
  };
  return (
    <div className="form-container">
      <form>
        <label>Pick Your GameBoard Size:</label>
        <select
          className="row-col-selection"
          value={props.rows}
          onChange={(e) => handleBoardChange(e)}
        >
          <option value={6}>6 x 6</option>
          <option value={7}>7 x 7</option>
          <option value={8}>8 x 8</option>
        </select>
      </form>
      <div className="gameBoard-title">GameBoard: Ready to Play!</div>
    </div>
  );
};

export default BoardSelection;
