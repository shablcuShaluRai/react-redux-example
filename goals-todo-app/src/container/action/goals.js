export const ADD_GOALS = "ADD_GOALS"
export const REMOVE_GOALS = "REMOVE_GOALS"

export const addGoalsAction = (goals) => ({
  type: ADD_GOALS,
  goals
})

export const removeGoalsAction = (id) => ({
  type: REMOVE_GOALS,
  id
})
