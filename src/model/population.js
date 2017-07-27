import Cell from './cell';

export function Population(rows, cols, cells){
  this.rows = rows;
  this.cols = cols;

  if (!cells) {
    this.cells = getNew(rows, cols);
    setNeighbours(rows, cols, this.cells);
  }else{
    this.cells = cells;
  }

  this.tick = function(){
    return regenerate(this.rows, this.cols, this.cells);
  };

  this.clone = function(){
    const clonedCells = this.cells.map(a => Object.assign({}, a));
    return new Population(this.rows, this.cols, this.cells);
  }
}

function getNew(rows, cols){
  var newCells = new Array();
  for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {
      var newCell = new Cell(row, col, Math.floor((Math.random() * 2)));
      newCells.push(newCell);
    }
  }
  return newCells;
}

function regenerate(rows, cols, cells){
    var newCells = new Array();
    cells.map(function(cell, index){
      var livingNeighbours = cell.neighbours.filter(n => n.state == 1).length;

      if (cell.state == 1) {
        if (livingNeighbours < 2 || livingNeighbours > 3) {
          const newCell = new Cell(cell.position.row, cell.position.col, 0);
          newCells.push(newCell);
        }else{
          const newCell = new Cell(cell.position.row, cell.position.col, 1);
          newCells.push(newCell);
        }
      }else{
        if (livingNeighbours == 3) {
          const newCell = new Cell(cell.position.row, cell.position.col, 1);
          newCells.push(newCell);
        }else{
          const newCell = new Cell(cell.position.row, cell.position.col, 0);
          newCells.push(newCell);
        }
      }

    });
    setNeighbours(rows, cols, newCells);
    return new Population(rows, cols, newCells);
  }

  function setNeighbours(rows, cols, cells){
    cells.map(function(cell){
      cell.neighbours = new Array();
      // neighbor in same row - Left
      if (cell.position.col > 0) {
        const neighbourRow = cell.position.row;
        const neighbourCol = cell.position.col - 1;

        const neighbour = cells.find(function(cell){
          return cell.position.row == neighbourRow && cell.position.col == neighbourCol;
        });

        const newNeighbour = new Cell(neighbourRow, neighbourCol, neighbour.state);
        cell.neighbours.push(newNeighbour);
      }

      // neighbour in same row - right
      if (cell.position.col < cols - 1) {
        const neighbourRow = cell.position.row;
        const neighbourCol = cell.position.col + 1;

        const neighbour = cells.find(function(cell){
          return cell.position.row == neighbourRow && cell.position.col == neighbourCol;
        });

        const newNeighbour = new Cell(neighbourRow, neighbourCol, neighbour.state);
        cell.neighbours.push(newNeighbour);
      }

      // neighbours in same col - above
      if (cell.position.row > 0) {
        const neighbourRow = cell.position.row - 1;
        const neighbourCol = cell.position.col;

        const neighbour = cells.find(function(cell){
          return cell.position.row == neighbourRow && cell.position.col == neighbourCol;
        });

        const newNeighbour = new Cell(neighbourRow, neighbourCol, neighbour.state);
        cell.neighbours.push(newNeighbour);
      }

      // neighbours in same col - below
      if (cell.position.row < rows - 1) {
        const neighbourRow = cell.position.row + 1;
        const neighbourCol = cell.position.col;

        const neighbour = cells.find(function(cell){
          return cell.position.row == neighbourRow && cell.position.col == neighbourCol;
        });

        const newNeighbour = new Cell(neighbourRow, neighbourCol, neighbour.state);
        cell.neighbours.push(newNeighbour);
      }

      // neighbours diagonal -  left above
      if (cell.position.row > 0 && cell.position.col > 0) {
        const neighbourRow = cell.position.row - 1;
        const neighbourCol = cell.position.col - 1;

        const neighbour = cells.find(function(cell){
          return cell.position.row == neighbourRow && cell.position.col == neighbourCol;
        });

        const newNeighbour = new Cell(neighbourRow, neighbourCol, neighbour.state);
        cell.neighbours.push(newNeighbour);
      }

      // neighbours diagonal -  right above
      if (cell.position.row > 0 && cell.position.col < cols - 1) {
        const neighbourRow = cell.position.row - 1;
        const neighbourCol = cell.position.col + 1;

        const neighbour = cells.find(function(cell){
          return cell.position.row == neighbourRow && cell.position.col == neighbourCol;
        });

        const newNeighbour = new Cell(neighbourRow, neighbourCol, neighbour.state);
        cell.neighbours.push(newNeighbour);
      }

      // neighbours diagonal -  left below
      if (cell.position.row < rows - 1 && cell.position.col > 0) {
        const neighbourRow = cell.position.row + 1;
        const neighbourCol = cell.position.col - 1;

        const neighbour = cells.find(function(cell){
          return cell.position.row == neighbourRow && cell.position.col == neighbourCol;
        });

        const newNeighbour = new Cell(neighbourRow, neighbourCol, neighbour.state);
        cell.neighbours.push(newNeighbour);
      }

      // neighbours diagonal -  right below
      if (cell.position.row < rows - 1 && cell.position.col < cols -1) {
        const neighbourRow = cell.position.row + 1;
        const neighbourCol = cell.position.col + 1;

        const neighbour = cells.find(function(cell){
          return cell.position.row == neighbourRow && cell.position.col == neighbourCol;
        });

        const newNeighbour = new Cell(neighbourRow, neighbourCol, neighbour.state);
        cell.neighbours.push(newNeighbour);
      }

    });
  }
