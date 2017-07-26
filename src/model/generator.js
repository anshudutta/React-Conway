import Cell from './cell'

  export function regenerate(rows, cols, cells){
    if (!cells) {
      var newCells = new Array();
      for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
          var newCell = new Cell(row, col, Math.floor((Math.random() * 2)));
          newCells.push(newCell);
        }
      }
      return {
        rows : rows,
        cols : cols,
        cells : newCells
      };
    }

    var newCells = new Array();
    setNeighbours(rows, cols, cells);

    cells.map(function(cell, index){
      var livingNeighbours = 0;
      cell.neighbours.map(function(neighbour){
        if (neighbour.state == 1) {
          livingNeighbours++;
        }
      });

      if (cell.state == 'ALIVE') {
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
    return {
      rows : rows,
      cols : cols,
      cells : newCells
    };
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
