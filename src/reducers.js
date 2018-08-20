import { combineReducers } from 'redux';
import routerReducer from './router/routerReducer';
import gamePageReducer from './pages/gamePage/gamePageReducer';

const reducers = combineReducers({
  router: routerReducer,
  gamePage: gamePageReducer,
});

export default reducers;
