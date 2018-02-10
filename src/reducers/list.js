import { combineReducers } from "redux"
import { CHANGE_TASK_COMPLETION } from "../constants/List"
import { EDIT_TASK_NAME } from "../constants/List"
import { DELETE_TASK } from "../constants/List"

function changeTaskCompletion(state, action) {
  switch (action.type) {
    case CHANGE_TASK_COMPLETION:
      return action.payload
    default:
      return state
  }
}

function editTaskName(state, action) {
  switch (action.type) {
    case EDIT_TASK_NAME:
      return action.payload
    default:
      return state
  }
}

function deleteTask(state, action) {
  switch (action.type) {
    case DELETE_TASK:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  changeTaskCompletion,
  editTaskName,
  deleteTask,
})
