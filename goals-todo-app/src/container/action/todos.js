export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"

export const addTodoAction = (todo) => ({
  type: ADD_TODO,
  todo
})

export const removeTodoAction = (id) => ({
  type: REMOVE_TODO,
  id
})

export const toggleTodo = (id) => ({
  type:TOGGLE_TODO,
  id
})
