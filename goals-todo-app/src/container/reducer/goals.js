import * as actions from '../action/goals'

export default function goals(state=[], action){
  switch (action.type) {
    case actions.ADD_GOALS:
      return state.concat(action.goals)
    case actions.REMOVE_GOALS:
    return state.filter(goals => goals.id !== action.id)
    default:
     return state
  }
}
