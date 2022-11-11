import Result from './Result';
import Board from './Board';
import PlayerInformation from './PlayerInformation';
import { useState, useReducer, useEffect } from 'react';
import { gameReducer, INITIAL_STATE } from './reducer';

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
  // When I load data from history the game should save in that format
  //const [game, setGame] = useState({});

  const [game, dispatch] = useReducer(gameReducer, INITIAL_STATE);
  //console.log(game);

  return (
    <>
      <div id="game" style={gameStyle}>
        {displayConfiguration && (
          <PlayerInformation
            setGameMode={dispatch}
            hide={() => setDisplay(false)}
          />
        )}
        {!displayConfiguration && (
          <>
            <Result
              players={game.players}
              gameplays={game.gamePlayed}
              draws={game.draws}
            />
            <Board
              players={game.players}
              setMoves={(mode) => dispatch(mode)}
              map={game.moves}
            />
          </>
        )}
      </div>
      <a href="../" style={{ color: 'white' }}>
        Back
      </a>
    </>
  );
}

export default Game;
