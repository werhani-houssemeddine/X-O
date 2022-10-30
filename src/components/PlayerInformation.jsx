import { useParams } from 'react-router-dom';
import '../stylesheets/modal.css'

function PlayerInformation({players, setPlayers}) {
  const [player1, player2] = players;
  return (
    <div className='modal-container'>
      <div className='players-form'>
        <div>
          <label htmlFor="player1">Player 1 Name</label>
          <input id="player1" type="text" value={player1.name} />
        </div>
        <div>
          <label htmlFor="player2">Player 1 Name</label>
          <input id="player2" type="text" value={player2.name} />
        </div>
      </div>
    </div>    
  )
}

export default PlayerInformation