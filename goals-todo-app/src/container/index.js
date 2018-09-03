import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addTodoAction, removeTodoAction, toggleTodo } from './action/todos'
import { addGoalsAction, removeGoalsAction } from './action/goals'

function mapStateToProps(state) {
  const { todos, goals } = state
  return {
    todos,
    goals
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTodoAction,
    removeTodoAction,
    toggleTodo,
    addGoalsAction,
    removeGoalsAction,
  }, dispatch)
}

const Container = connect(mapStateToProps, mapDispatchToProps)

export default Container
