import { combineReducers } from 'redux';
import universeReducer from './universe_reducer';

const rootReducer = combineReducers({
  universe : universeReducer
});

export default rootReducer;
