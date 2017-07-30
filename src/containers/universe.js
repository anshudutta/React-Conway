import React, { Component } from 'react';
import { connect } from 'react-redux';
import Unit from '../components/unit'
import {Cell} from '../middleware/cell'

class Universe extends Component {
  constructor(props){
    super(props);
    this.state = {};
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
          /*
          <Unit
            data=
            {
              {
                cellState : cell.state,
                key : `row ${cell.position.row}, col ${cell.position.col}`
              }
            }>
           </Unit>
           */
        );
      });
      return <tr key={index}>{rows}</tr>;
    });
  }

  render(){
    return(
      <div>
        <table className="table table-responsive table-condensed table-bordered">
          <tbody>
            {this.renderUniverse()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    population: state.population
  };
}

export default connect(mapStateToProps)(Universe);
