const INITIAL_STATE = {
  mode: '',
  gamePlayed: 0,
  draws: 0,
  players: [],
  moves: [...Array(9)],
  gameID: 'rtk892',
};
const ACTIONS_TYPE = {
  SWAPE: 'SWAPE',
  MODE: 'MODE',
  SET_PLAYERS: 'SET PLAYERS',
  SET_WINNER: 'SET WINNER',
  NEW_GAME: 'NEW GAME',
  MOVES: 'MOVES',
};
const gameReducer = (state, action) => {
  //console.log({ state, action });

  switch (action.type) {
    case ACTIONS_TYPE.SWAPE:
      let { players } = state;
      players = [
        { ...players[0], isNow: !players[0].isNow },
        { ...players[1], isNow: !players[1].isNow },
      ];
      return { ...state, players };

    case ACTIONS_TYPE.MODE:
      const id = action.payload;
      return { ...state, mode: id === 'single' ? 'single' : 'two_players' };

    case ACTIONS_TYPE.SET_PLAYERS:
      return {
        ...state,
        players: action.payload,
      };

    case ACTIONS_TYPE.SET_WINNER:
      const playerID = action.payload;
      state.players.forEach((player) => {
        if (player.id === playerID) player.wins += 1;
        else player.loses += 1;
      });
      return { ...state, moves: [...Array(9)], gamePlayed: state.gamePlayed + 1 };

    case ACTIONS_TYPE.MOVES:
      return state;

    case ACTIONS_TYPE.NEW_GAME:
      return { ...state, gamePlayed: state.gamePlayed + 1 };

    default:
      return state;
  }
};

export { INITIAL_STATE, gameReducer };
