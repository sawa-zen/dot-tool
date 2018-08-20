import { SET_CURRENT_PAGE } from './routerAction';

const initState = {
  currentPage: 'start',
};

const routerReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default: return state;
  }
};

export default routerReducer;
