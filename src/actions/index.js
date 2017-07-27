import axios from 'axios';
import {Population} from '../model/population';
import {FETCH_STATE} from '../constants/constant';

export function fetchState(population){
  var newPopulation = population.tick();
  return{
    type: FETCH_STATE,
    payload : newPopulation
  };
}
