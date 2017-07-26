function Cell(row, col, state){
  this.position = {
    row : row,
    col : col
  },
  this.state = state;
  this.neighbours = new Array();
};

module.exports = Cell;
