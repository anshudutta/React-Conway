import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchState} from '../actions/index';
import Cell from './cell'

class Universe extends Component {
  constructor(props){
    super(props);

    /*
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
    */
    this.state = {generation : 0};
    this.onClick = this.onClick.bind(this);
  }

  onClick(event){

    //const clonedCells = this.state.population.cells.map(a => Object.assign({}, a));
    ////const rows = this.state.population.rows;
    //const cols = this.state.population.cols;

    //const regeneratedCells = regenerate(rows, cols, clonedCells);
    /*
    this.setState({
      generation : this.state.generation + 1,
      population : {
        rows : rows,
        cols :cols,
        cells : regeneratedCells
      }
    });
    */

    this.setState({generation : this.state.generation + 1});
    this.props.fetchState(this.props.population);
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
