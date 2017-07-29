import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchState} from '../actions/index';

class Tick extends Component {
  constructor(props){
    super(props);
    this.state = {generation : 0};
    this.onClick = this.onClick.bind(this);
  }

  onClick(event){
    this.setState({generation : this.state.generation + 1});
    this.props.fetchState(this.state.generation);
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <button
            type="button"
            onClick={this.onClick}
            className="btn btn-primary">
            Tick <span className="badge badge-pill badge-warning">{this.state.generation}</span>
          </button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchState}, dispatch);
}

export default connect(null, mapDispatchToProps)(Tick);
