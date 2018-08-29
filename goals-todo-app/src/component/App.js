import React, { Component } from 'react';
import Container from "../container"
import Todos from './Todos'

class App extends Component {
  render() {
   console.log(this.props);
    return (
      <div>
        TODO
        <Todos {...this.props}/>
      </div>
    );
  }
}

export default Container(App);
