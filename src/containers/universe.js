import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchState} from '../actions/index';

class Universe extends Component {
  constructor(props){
    super(props);
    this.state = {generation : 0};

    this.onClick = this.onClick.bind(this);
  }

  onClick(event){
    this.setState({generation : this.state.generation + 1});

    this.props.fetchState(this.props.universe);

  }

  renderUniverse(){
    return this.props.universe.cells.map(function(item, index) {
      var rows = item.map(function(cell, i) {
        var cName =  cell.state == 0 ? "bg-success" : "bg-danger";
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
    universe: state.universe
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Universe);
