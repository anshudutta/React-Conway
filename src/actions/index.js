import axios from 'axios';
import {Population} from '../middleware/population';
import {FETCH_STATE} from '../constants/constant';

export function fetchState(generation){
  return{
    type: FETCH_STATE,
    payload : generation
  };
}
