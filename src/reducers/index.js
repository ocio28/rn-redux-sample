import { combineReducers } from "redux";
import { ADD_TODO, CLEAR_TODO, REMOVE_TODO } from "../actions/Types";
import createReducer from "./createReducer";

const todos = createReducer([], {
  [ADD_TODO]: (state, { id, content }) => {
    return [ ...state, { id, content }]
  },
  [REMOVE_TODO]: (state, { id }) => {
    return state.filter(v => v.id !== id)
  },
  [CLEAR_TODO]: () => []
})

export default combineReducers({ todos })