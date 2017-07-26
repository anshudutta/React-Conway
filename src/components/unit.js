import React, { Component } from 'react';

export default class Unit extends Component{
  constructor(props){
    super(props);
    if (!props) {
      this.state = {};
    }else{
      this.state = {
        cellState : props.data.cellState,
        key : props.data.key
    };
  }
}

  render(){
    var cName =  this.state == 1 ? "bg-success" : "bg-danger";
    return(
      <td
        key={this.state.key}
        className={cName}>
      </td>
    );
  }
}

/*
function mapStateToProps(state){
    return {
      population: state.cellState
    };
  }
  */
