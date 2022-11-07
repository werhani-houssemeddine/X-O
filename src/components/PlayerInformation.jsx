import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import '../stylesheets/modal.css';

function PlayerInformation({ gameMode, setPlayers, hide }) {
  const player1 = useRef();
  const player2 = useRef({ value: 'Computer' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = [player1.current.value, player2.current.value];

    setPlayers(info);
    player1.current.value = '';
    player2.current.value = '';
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
          gameMode === 'single' ? (
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
