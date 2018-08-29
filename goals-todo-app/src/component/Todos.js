import React, { Component } from "react"
import List from './List'

export default class Todos extends Component {
  state = {
    todo: '',
  }

  handleChange(e) {
    this.setState({todo: e.target.value})
  }

  handleSubmit = () => {
    const { todo } = this.state
    todo && this.props.addTodoAction({todo})
    this.setState({todo: ''})
  }

  render() {
    return(
      <div>
       <input
         type="text"
         placeholder="Add TODO"
         value={this.state.todo}
         onChange={(e) => this.handleChange(e)}
       />
       <button onClick={this.handleSubmit}>Submit</button>
       <List todos={this.props.todos}/>
      </div>
    )
  }
}
