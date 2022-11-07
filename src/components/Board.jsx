import '../stylesheets/board.css';

function Board({ currentPlayer, changePlayer }) {
  // this function will return a 2D Array of (3 x 3)
  const btnList = () => {
    // the currentPlayer variable is an object which contains all the player information
    const current = currentPlayer.role;
    //const current = player1.isNow ? player1 : player2;

    const clickHandler = (e, index) => {
      console.log('Index ', index);
      e.target.innerHTML = current;
      changePlayer();
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
