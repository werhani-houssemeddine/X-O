import '../stylesheets/board.css';

function Board({ players, setMoves, map }) {
  // this function will return a 2D Array of (3 x 3)
  const btnList = () => {
    const current = players[0].isNow ? players[0] : players[1];

    const clickHandler = (e, index) => {
      if (e.target.innerHTML === '') {
        e.target.innerHTML = current.role;
        map[index] = current.role;
        setMoves({ type: 'SWAPE' });
        setMoves({ type: 'MOVES', playload: map });
      }
    };

    const arrList = [];
    for (let index = 0; index < 9; index++)
      arrList.push(
        <div
          className="board-element"
          key={index}
          onClick={(e) => clickHandler(e, index)}
        ></div>
      );
    return arrList;
  };

  return (
    <div className="board">
      {
        //Btn list is a function so i have to invoke it to get the array
        btnList()
      }
    </div>
  );
}

export default Board;
