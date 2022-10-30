import '../stylesheets/resultBoard.css';

function Result({ players, results }) {
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
        <p>Game played: {results.player1 + results.player2 + results.draw}</p>
        <p>
          {player1.name} wins {results.player1}
        </p>
        <p>
          {player2.name} wins {results.player2}
        </p>
        <p>Draw {results.draw}</p>
      </div>
      <div className="playing">
        {player1.isNow ? `${player1.name} 's role` : `${player2.name} 's role`}
      </div>
    </div>
  );
}

export default Result;
