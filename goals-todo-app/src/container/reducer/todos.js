// todo reducers
import * as actions from "../action/todos"

function todos(state=[], action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return state.concat([action.todo])
    case actions.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id)
    default:
     return state
  }
}

export default todos
