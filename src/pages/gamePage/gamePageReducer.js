import { SET_HIGH_SCORE } from './gamePageAction';

const initState = {
  highScore: 0,
};

const gamePageReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_HIGH_SCORE:
      return {
        ...state,
        highScore: action.payload,
      };
    default:
      return state;
  }
}

export default gamePageReducer;
