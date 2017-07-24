var cell = require('./cell').cell;

function universe(rows, cols, cells){
  this.rows = rows;
  this.cols = cols;
  this.cells = cells;
}

universe.prototype.regenerate = function(){
  var newCells = new Array();
  setNeighbours(this.cells);

}

function setNeighbours(rows, cols, cells){
  cells.map(function(cell){
    var neighbourRow;
    var neighbourCol;

    // neighbor in same row - Left
    if (cell.col > 0) {
      neighbourRow = cell.row;
      neighbourCol = cell.col - 1;
    }

    // neighbour in same row - right
    if (cell.col < cols - 1) {
      neighbourRow = cell.row;
      neighbourCol = cell.col + 1;
    }

    // neighbours in same col - above
    if (cell.row > 0) {
      neighbourRow = cell.row - 1;
      neighbourCol = cell.col;
    }

    // neighbours in same col - above
    if (cell.row > 0) {
      neighbourRow = cell.row - 1;
      neighbourCol = cell.col;
    }

    // neighbours in same col - below
    if (cell.row < rows - 1) {
      neighbourRow = cell.row + 1;
      neighbourCol = cell.col;
    }

    // neighbours diagonal -  left above
    if (cell.row > 0 && cell.col > 0) {
      neighbourRow = cell.row - 1;
      neighbourCol = cell.col - 1;
    }

    // neighbours diagonal -  right above
    if (cell.row > 0 && cell.col < cols - 1) {
      neighbourRow = cell.row - 1;
      neighbourCol = cell.col + 1;
    }

    // neighbours diagonal -  left below
    if (cell.row < rows - 1 && cell.col > 0) {
      neighbourRow = cell.row + 1;
      neighbourCol = cell.col - 1;
    }

    // neighbours diagonal -  right below
    if (cell.row < rows - 1 && cell.col < cols -1) {
      neighbourRow = cell.row + 1;
      neighbourCol = cell.col - 1;
    }

    var cellState = getCellState(neighbourRow, neighbourCol + 1);
    var neighbour = new cell(cell.row, cell.col, cellState);
    cell.push(neighbour);

  });
}

function getCellState(row, col, cells){
  return cells.find(function(cell){
    return cell.row == row && cell.col == col;
  }).state;
}

module.exports = universe;
