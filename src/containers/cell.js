function Cell(row, col, state){
  this.row = row;
  this.col = col;
  this.state = state;
  this.neighbours = new Array();
};

module.exports = Cell;
