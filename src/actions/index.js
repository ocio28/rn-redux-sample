import { ADD_TODO, CLEAR_TODO, REMOVE_TODO } from "./Types";


let id = 0

export function add_todo(content) {
  id = id + 1
  return {
    type: ADD_TODO,
    content,
    id
  }
}

export function remove_todo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

export function clear_todo() {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch({
          type: CLEAR_TODO
        })
        resolve()
      }, 1000)
    })
  }
}
