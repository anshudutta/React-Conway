import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchState} from '../actions/index';
import Cell from './cell'

class Universe extends Component {
  constructor(props){
    super(props);
    this.state = {
      generation : 0,
      population : {
        rows : 0,
        cols : 0,
        cells : {}
      }
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event){

    const clonedCells = this.props.population.cells.map(a => Object.assign({}, a));
    const rows = this.props.population.rows;
    const cols = this.props.population.cols;

    const regeneratedCells = this.regenerate(rows, cols, clonedCells);
    this.setState({
      generation : this.state.generation + 1,
      population : {
        rows : this.props.population.rows,
        cols : this.props.population.cols,
        cells : regeneratedCells
      }
    });
    //this.props.fetchState(this.props.universe);
  }

  renderUniverse(){
    const numOfRows = this.props.population.rows;
    const cells = this.props.population.cells;
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
      var neighbourRow = 0;
      var neighbourCol = 0;

      // neighbor in same row - Left
      if (cell.position.col > 0) {
        neighbourRow = cell.position.row;
        neighbourCol = cell.position.col - 1;
      }

      // neighbour in same row - right
      if (cell.position.col < cols - 1) {
        neighbourRow = cell.position.row;
        neighbourCol = cell.position.col + 1;
      }

      // neighbours in same col - above
      if (cell.position.row > 0) {
        neighbourRow = cell.position.row - 1;
        neighbourCol = cell.position.col;
      }

      // neighbours in same col - above
      if (cell.position.row > 0) {
        neighbourRow = cell.position.row - 1;
        neighbourCol = cell.position.col;
      }

      // neighbours in same col - below
      if (cell.position.row < rows - 1) {
        neighbourRow = cell.position.row + 1;
        neighbourCol = cell.position.col;
      }

      // neighbours diagonal -  left above
      if (cell.position.row > 0 && cell.position.col > 0) {
        neighbourRow = cell.position.row - 1;
        neighbourCol = cell.position.col - 1;
      }

      // neighbours diagonal -  right above
      if (cell.position.row > 0 && cell.position.col < cols - 1) {
        neighbourRow = cell.position.row - 1;
        neighbourCol = cell.position.col + 1;
      }

      // neighbours diagonal -  left below
      if (cell.position.row < rows - 1 && cell.position.col > 0) {
        neighbourRow = cell.position.row + 1;
        neighbourCol = cell.position.col - 1;
      }

      // neighbours diagonal -  right below
      if (cell.position.row < rows - 1 && cell.position.col < cols -1) {
        neighbourRow = cell.position.row + 1;
        neighbourCol = cell.position.col - 1;
      }

      const neighbour = cells.find(function(cell){
        return cell.position.row == neighbourRow && cell.position.col == neighbourCol;
      });

      const newNeighbour = new Cell(neighbourRow, neighbourCol, neighbour.state);
      cell.neighbours.push(newNeighbour);

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
