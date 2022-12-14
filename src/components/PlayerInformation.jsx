import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/modal.css';
import Player from './Player';

function PlayerInformation(props) {
  const { setPlayers, hide, setGameMode } = props;

  const { id } = useParams();

  const player1 = useRef();
  const player2 = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const COMPUTER = new Player('Computer', 'cmp', 'O', false);

    const players = [
      new Player(player1.current.value || 'Player 1', uuidv4(), 'X', true),
      id === 'single'
        ? COMPUTER
        : new Player(player2.current.value || 'Player 2', uuidv4(), 'O', false),
    ];

    setGameMode({ type: 'MODE', payload: id });
    setGameMode({ type: 'SET PLAYERS', payload: players });
    setGameMode({ type: 'NEW GAME' });

    player1.current.value = '';
    id != 'single' && (player2.current.value = '');
    hide();
  };

  return (
    <div className="modal-container">
      <form className="players-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="player1" className="player-label">
            Set Player Name
          </label>
          <input
            id="player1"
            type="text"
            placeholder="Player 1"
            className="player-input"
            ref={player1}
          />
        </div>
        {
          // At this moment we will check only for name
          // if the name === computer it will not render the next div
          id === 'single' ? (
            ''
          ) : (
            <div className="input-container">
              <label htmlFor="player2" className="player-label">
                Set Player Name
              </label>
              <input
                id="player2"
                type="text"
                placeholder="Player 2"
                className="player-input"
                ref={player2}
              />
            </div>
          )
        }

        <div className="validation-btn" onClick={handleSubmit}>
          <button className="sbm-btn" type="submit">
            Confirmer
          </button>
        </div>
      </form>
    </div>
  );
}

export default PlayerInformation;
