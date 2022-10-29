import Result from './Result';
import Board from './Board';

// This function will contains the board and result component
function Game() {
  const gameStyle = {
    display: 'flex',
    gap: '20px',
  };

  const players = [
    { name: 'Houssem', role: 'X', isNow: true },
    { name: 'Iyed', role: 'O', isNow: false },
  ];
  const results = {
    player1: 10,
    player2: 7,
    draw: 3,
  };

  return (
    <div id="game" style={gameStyle}>
      <Result players={players} results={results} />
      <Board />
    </div>
  );
}

export default Game;
