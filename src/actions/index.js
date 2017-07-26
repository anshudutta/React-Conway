import axios from 'axios';
import {regenerate} from '../model/generator';
import {FETCH_STATE} from '../constants/constant';

export function fetchState(population){
  const rows = population.rows;
  const cols = population.cols;
  const cells = population.cells;

  const clonedCells = cells.map(a => Object.assign({}, a));
  const newPopulation = regenerate(rows, cols, clonedCells);
  return{
    type: FETCH_STATE,
    payload : newPopulation
  };
}
