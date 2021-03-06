import React, { Component } from 'react';

export default class Header extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className="jumbotron">
          <h1>Conways Game Of Life</h1>
          <div>
            The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead.
            Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent.
            At each step in time, the following transitions occur:
            <ul>
              <li>Any live cell with fewer than two live neighbors dies, as if caused by under-population.</li>
              <li>Any live cell with two or three live neighbors’ lives on to the next generation.</li>
              <li>Any live cell with more than three live neighbors dies, as if by overcrowding.</li>
              <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
            </ul>
            The initial pattern constitutes the seed of the system.
            The first generation is created by applying the above rules simultaneously to every cell in the seed. Births and deaths occur simultaneously,
            and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one).
            The rules continue to be applied repeatedly to create further generations.
          </div>
        </div>
    );
  }
}
