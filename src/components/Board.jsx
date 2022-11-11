import '../stylesheets/board.css';

function Board({ players, setMoves, board }) {
  //console.log(board);
  const checkWinner = (id, board) => {
    for (let index = 0; index < 9; index += 3) {
      if (
        board[index] &&
        board[index] === board[index + 1] &&
        board[index] === board[index + 2]
      ) {
        setMoves({ type: 'SET WINNER', payload: id });
      }
    }

    for (let index = 0; index < 3; index++) {
      if (
        board[index] &&
        board[index] === board[index + 3] &&
        board[index] === board[index + 6]
      ) {
        setMoves({ type: 'SET WINNER', payload: id });
      }
    }

    if (board[4] && board[0] === board[4] && board[0] === board[8]) {
      setMoves({ type: 'SET WINNER', payload: id });
    }

    if (board[4] && board[2] === board[4] && board[2] === board[6]) {
      setMoves({ type: 'SET WINNER', payload: id });
    }
  };

  const clickHandler = (e, index) => {
    const current = players[0].isNow ? players[0] : players[1];
    if (e.target.innerHTML === '') {
      //e.target.innerHTML = current.role;
      board[index] = current.role;
      setMoves({ type: 'SWAPE' });
      setMoves({ type: 'MOVES', playload: board });
      checkWinner(current.id, board);
    }
  };

  return (
    <div className="board">
      {
        //Btn list is a function so i have to invoke it to get the array
        board.map((btn, index) => (
          <div
            className="board-element"
            key={index}
            onClick={(e) => clickHandler(e, index)}
          >{btn}</div>
        ))
      }
    </div>
  );
}

export default Board;
