import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchState} from '../actions/index';
import Cell from './cell'

class Universe extends Component {
  constructor(props){
    super(props);

    const cells = props.population.cells;
    const rows = props.population.rows;
    const cols = props.population.cols;

    this.state = {
      generation : 0,
      population : {
        rows : rows,
        cols : cols,
        cells : cells
      }
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event){

    const clonedCells = this.state.population.cells.map(a => Object.assign({}, a));
    const rows = this.state.population.rows;
    const cols = this.state.population.cols;

    //console.log(this.props.population.cells);
    const regeneratedCells = this.regenerate(rows, cols, clonedCells);
  //  console.log(regeneratedCells);
    this.setState({
      generation : this.state.generation + 1,
      population : {
        rows : rows,
        cols :cols,
        cells : regeneratedCells
      }
    });
    console.log(this.state);
    //this.props.fetchState(this.props.universe);
  }

  renderUniverse(){
    const numOfRows = this.state.population.rows;
    const cells = this.state.population.cells;
    var orderByRows = new Array();

    for (var i = 0; i < numOfRows; i++) {
      const items = cells.filter(function(c, index){
        return c.position.row == i;
      });
      orderByRows.push(items);
    }

    return orderByRows.map(function(item, index) {
      var rows = item.map(function(cell, i) {
        var cName =  cell.state == 1 ? "bg-success" : "bg-danger";
        return(
          <td
            key={i}
            className={cName}>
          </td>
        );
      });
      return <tr key={index}>{rows}</tr>;
    });
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <button
          type="button"
          onClick={this.onClick}
          className="btn btn-primary">
          Tick <span className="badge">{this.state.generation}</span>
        </button>
        <table className="table table-responsive table-bordered">
          <tbody>
            {this.renderUniverse()}
          </tbody>
        </table>
      </form>
    );
  }

  regenerate(rows, cols, cells){

    var newCells = new Array();
    this.setNeighbours(rows, cols, cells);

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
    return newCells;
  }

  setNeighbours(rows, cols, cells){
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

}

function mapStateToProps(state){
  return {
    population: state.population
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Universe);
