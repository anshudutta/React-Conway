import axios from 'axios';
import {Population} from '../model/population';
import {FETCH_STATE} from '../constants/constant';

export function fetchState(population){
  //const rows = population.rows;
  //const cols = population.cols;
  //const cells = population.cells;

  //const clonedCells = cells.map(a => Object.assign({}, a));
  //const newPopulation = regenerate(rows, cols, clonedCells);
  var newPopulation = population.tick();
  return{
    type: FETCH_STATE,
    payload : newPopulation
  };
}
