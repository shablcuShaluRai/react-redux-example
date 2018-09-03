export const generateId = () => (
  Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
)

export const generateIdGoals = () => (
  Math.random().toString(32).substring(2) + (new Date()).getTime().toString(36)
)
