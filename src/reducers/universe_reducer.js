import {FETCH_STATE} from '../constants/constant';
import Population from '../middleware/population';

export default function(state =[], action){
  switch (action.type) {
    case FETCH_STATE:
      return action.payload;
    default:
  }
  return new Population(25,40);
}
