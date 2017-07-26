import {FETCH_STATE} from '../constants/constant';
import {regenerate} from '../model/generator';

export default function(state =[], action){
  switch (action.type) {
    case FETCH_STATE:
      return action.payload;
    default:

  }
  return regenerate(25,25);
}
