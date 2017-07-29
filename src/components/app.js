import React, { Component } from 'react';
import Universe from '../containers/universe';
import Header from './header';
import Tick from '../containers/tick'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Tick/>
        <Universe/>
      </div>
    );
  }
}
