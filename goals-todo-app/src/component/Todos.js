import React, { Component } from "react"
import List from './List'
import { generateId } from '../utils/utils'

export default class Todos extends Component {
  state = {
    todo: '',
  }

  handleChange(e) {
    this.setState({todo: e.target.value})
  }

  handleSubmit = () => {
    const { todo } = this.state
    todo && this.props.addTodoAction({
      id:generateId(),
      todo
    })
    this.setState({todo: ''})
  }

  render() {
    const { todos, removeTodoAction} = this.props
    return(
      <div>
       <input
         type="text"
         placeholder="Add TODO"
         value={this.state.todo}
         onChange={(e) => this.handleChange(e)}
       />
       <button onClick={this.handleSubmit}>Submit</button>
       <List todos={todos} removeTodoAction={removeTodoAction}/>
      </div>
    )
  }
}
