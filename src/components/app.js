import React, { Component } from 'react';
import Universe from '../containers/universe';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Universe/>
      </div>
    );
  }
}
