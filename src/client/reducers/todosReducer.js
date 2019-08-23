export const INITIAL_STATE = {
  todo: {
    fetching: false,
    received: false,
    content: {
      id: '',
      title: '',
    },
  },
  todos: {
    fetching: false,
    received: false,
    content: [],
  },
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}
