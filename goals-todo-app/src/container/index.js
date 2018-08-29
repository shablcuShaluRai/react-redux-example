import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addTodoAction } from './action/todos'

function mapStateToProps(state) {
  const { todos } = state
  console.log(todos);
  return {
    todos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTodoAction}, dispatch)
}

const Container = connect(mapStateToProps, mapDispatchToProps)

export default Container
