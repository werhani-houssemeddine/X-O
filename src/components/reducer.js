import Player from './Player';

const INITIAL_STATE = {
  mode: '',
  gamePlayed: 0,
  players: [],
  gameID: 'rtk892',
};
const ACTIONS_TYPE = {
  SWAPE: 'SWAPE',
  MODE: 'MODE',
  SET_PLAYERS: 'SET PLAYERS',
  NEW_GAME: 'NEW GAME',
};
const gameReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_TYPE.SWAPE:
      return 'done';

    case ACTIONS_TYPE.MODE:
      const { id } = action.payload;
      return { ...state, mode: id === 'single' ? 'single' : 'two_players' };

    case ACTIONS_TYPE.SET_PLAYERS:
      const [player1, player2] = action.payload;
      return {
        ...state,
        players: [
          new Player(player1.name, player1.id, 'X', true),
          new Player(player2.name, player2.id, 'O', false),
        ],
      };

    case ACTIONS_TYPE.SET_WINNER:
      const { playerID } = action.payload;
      state.players.forEach((player) => {
        if (player.id === playerID) player.wins += 1;
        else player.loses += 1;
      });
      return state;

    case ACTIONS_TYPE.NEW_GAME:
      return { ...state, gamePlayed: state.gamePlayed + 1 };
  }
};

export { INITIAL_STATE, gameReducer };
