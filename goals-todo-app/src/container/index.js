import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addTodoAction, removeTodoAction, toggleTodo } from './action/todos'

function mapStateToProps(state) {
  const { todos } = state
  return {
    todos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTodoAction, removeTodoAction, toggleTodo}, dispatch)
}

const Container = connect(mapStateToProps, mapDispatchToProps)

export default Container
