import { combineReducers } from "redux"
import { CHANGE_ALL_TASKS_COMPLETION } from "../constants/Header"
import { ADD_TASK } from "../constants/Header"
import { EMPTY_NAME } from "../constants/Header"

function changeAllTasksCompletion(state, action) {
  switch (action.type) {
    case CHANGE_ALL_TASKS_COMPLETION:
      return action.payload
    default:
      return state
  }
}

function addTask(state, action) {
  switch (action.type) {
    case ADD_TASK:
      return action.payload
    default:
      return EMPTY_NAME
  }
}

export default combineReducers({
  changeAllTasksCompletion,
  addTask,
})
