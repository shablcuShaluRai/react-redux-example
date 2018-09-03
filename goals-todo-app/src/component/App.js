import React, { Component } from 'react';
import Container from "../container"
import Todos from './Todos'
import Goals from './Goals'

class App extends Component {
  render() {
    return (
      <div>
        TODO
        <Todos {...this.props}/>
        Goals
        <Goals {...this.props}/>
      </div>
    );
  }
}

export default Container(App);
