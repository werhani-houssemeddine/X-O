import '../stylesheets/resultBoard.css';

function Result({ players, gameplays, playerIndex }) {
  // playerIndex variable is the index of the currentPlayer
  const [player1, player2] = players;
  //const role = playerIndex[playerIndex].name;
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
      <div className="playing">{players[playerIndex].name} role</div>
    </div>
  );
  return <p>Under configuration</p>;
}

export default Result;
