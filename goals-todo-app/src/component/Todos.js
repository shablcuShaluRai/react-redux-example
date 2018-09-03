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
      complete: false,
      todo
    })
    this.setState({todo: ''})
  }

  render() {
    const { todos, removeTodoAction, toggleTodo} = this.props
    return(
      <div>
       <input
         type="text"
         placeholder="ADD TODO"
         value={this.state.todo}
         onChange={(e) => this.handleChange(e)}
       />
       <button
        onClick={this.handleSubmit}
        >
        Submit
      </button>
       <List
         list={todos}
         removeBtnClick={removeTodoAction}
         toggleitem={toggleTodo}
       />
     </div>
    )
  }
}
