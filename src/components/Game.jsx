import Result from './Result';
import Board from './Board';
import PlayerInformation from './PlayerInformation';
import { useState } from 'react';

const gameStyle = {
  display: 'flex',
  gap: '20px',
};

// This function will contains the board and result component
function Game() {
  const [players, setPlayers] = useState([
    { id: 'X-1', name: 'Player 1', role: 'X', isNow: true },
    { id: 'O-2', name: 'Player 2', role: 'O', isNow: false },
  ]);

  const changePlayer = (currentPlayer) => {
    setPlayers(prev => prev.map(player => (
      {...player, isNow: !player.isNow}
    )))
  }

  const results = {
    player1: 10,
    player2: 7,
    draw: 3,
  };

  return (
    <>
      <div id="game" style={gameStyle}>
        <PlayerInformation players={players} setPlayers={setPlayers} />
        <Result players={players} results={results} />
        <Board
          currentPlayer={players[0].isNow ? players[0] : players[1]}
          changePlayer={changePlayer}
        />
      </div>
      <a href="../" style={{ color: 'white' }}>
        Back
      </a>
    </>
  );
}

export default Game;
