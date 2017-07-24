import axios from 'axios';
import {universe} from '../server/universe.js';

export const FETCH_STATE = 'FETCH_STATE';
export function fetchState(universe){
  //const url ='/';
  const rows = universe.rows;
  const cols = universe.cols;
  const cells = universe.cells;

  console.log(universe.rows);
  console.log(universe.cols);
  console.log(universe.cells);

  const request = universe.regenerate(rows, cols, cells);
  //console.log(universe);
  return{
    type: FETCH_STATE,
    payload : universe
  };
}
