import Result from './Result';
import Board from './Board';
import PlayerInformation from './PlayerInformation';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const gameStyle = {
  display: 'flex',
  gap: '20px',
};

// This function will contains the board and result component
function Game() {
  // The players Name will be saved at the session storage (When the user refresh the page we will not ask
  // him for players name). Every session opened we will consider as a new game so new players.
  // We will save an array of players name [player1, player2] if the game is multiplayer mode
  // and [player1, computer] if the game is single mode
  const { id } = useParams();
  let _players;
  if (id === 'single') {
    _players = JSON.parse(sessionStorage.getItem('singleMode')) || [
      'player1',
      'player2',
    ];
  } else {
    _players = JSON.parse(sessionStorage.getItem('multi')) || [
      'player1',
      'computer',
    ];
  }

  const [players, setPlayers] = useState([
    { id: 'X-1', role: 'X', name: _players[0] },
    { id: 'O-1', role: 'O', name: _players[1] },
  ]);

  const changePlayer = (currentPlayer) => {
    setPlayers((prev) =>
      prev.map((player) => ({ ...player, isNow: !player.isNow }))
    );
  };

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
