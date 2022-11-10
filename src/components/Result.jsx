import '../stylesheets/resultBoard.css';

function Result({ players, gameplays }) {
  const [player1, player2] = players;

  return (
    <div className="result-board">
      <div className="info">
        <p>
          {player1.name}: {player1.role}
        </p>
        <p>
          {player2.name}: {player2.role}
        </p>
      </div>

      <div className="result">
        <p>Game played: {gameplays}</p>
        <p>
          {player1.name} wins {player1.wins}
        </p>
        <p>
          {player2.name} wins {player2.wins}
        </p>
        <p>Draw {gameplays - player1.wins - player1.loses}</p>
      </div>
      <div className="playing">
        {player1.isNow ? player1.name : player2.name}
        role
      </div>
    </div>
  );
}

export default Result;
