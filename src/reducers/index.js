import { combineReducers } from 'redux';
import universeReducer from './universe_reducer';

const rootReducer = combineReducers({
  population : universeReducer
});

export default rootReducer;
