import Result from './Result';
import Board from './Board';
import PlayerInformation from './PlayerInformation';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const gameStyle = {
  display: 'flex',
  gap: '20px',
};

const loadJSON = (key) => key && JSON.parse(sessionStorage.getItem(key));
const saveJSON = (key) => (data) =>
  sessionStorage.setItem(key, JSON.stringify(data));

// This function will contains the board and result component
function Game() {
  const [displayConfiguration, setDisplay] = useState(true);

  // The players Name will be saved at the session storage (When the user refresh the page we will not ask
  // him for players name). Every session opened we will consider as a new game so new players.
  // We will save an array of players name [player1, player2] if the game is multiplayer mode
  // and [player1, computer] if the game is single mode
  const { id } = useParams();

  // When I load data from history the game should save in that format
  const [game, setGame] = useState({
    mode: id === 'single' ? 'single' : 'two player',
    gamePlayed: 0,
    players: [
      { name: '', wins: 0, loses: 0, id: 'pla 1', role: 'X' },
      { name: '', wins: 0, loses: 0, id: 'pla 2', role: 'O' },
    ],
    indexOfCurrentPlayer: 0,
    gameID: 'rtk892',
  });

  const setPlayers = ([player1, player2]) => {
    setGame((prev) => ({
      ...prev,
      players: [
        { ...prev.players[0], name: player1 },
        { ...prev.players[1], name: player2 },
      ],
    }));
  };

  const swapePlayer = (id) => {
    setGame((prev) => ({
      ...prev,
      indexOfCurrentPlayer: (prev.indexOfCurrentPlayer + 1) % 2,
    }));
  };

  //console.log(game);

  return (
    <>
      <div id="game" style={gameStyle}>
        {displayConfiguration && (
          <PlayerInformation
            setPlayers={setPlayers}
            gameMode={game.mode}
            hide={() => setDisplay(false)}
          />
        )}
        <Result
          players={game.players}
          playerIndex={game.indexOfCurrentPlayer}
          gameplays={game.gamePlayed}
        />
        <Board
          currentPlayer={game.players[game.indexOfCurrentPlayer]}
          changePlayer={swapePlayer}
        />
      </div>
      <a href="../" style={{ color: 'white' }}>
        Back
      </a>
    </>
  );
}

export default Game;
