import { useParams } from 'react-router-dom';
import '../stylesheets/modal.css'

function PlayerInformation({players, setPlayers}) {
  const [player1, player2] = players;
  return (
    <div className='modal-container'>
      <div className='players-form'>
        <div  className='input-container'>
          <label htmlFor="player1" className='player-label'>Set Player Name</label>
          <input id="player1" type="text" value={player1.name} className="player-input" />
        </div>

        <div className='input-container'>
          <label htmlFor="player2" className='player-label'>Set Player Name</label>
          <input id="player2" type="text" value={player2.name} className="player-input" />
        </div>

        <div className='validation-btn'>
          <span>Confirmer</span>
        </div>
      </div>
    </div>    
  )
}

export default PlayerInformation