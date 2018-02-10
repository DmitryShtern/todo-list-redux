import { combineReducers } from "redux"
import { CHANGE_UNCOMPLETION_TASKS_INDEX } from "../constants/Bar"
import { DELETE_ALL_COMPLETED_TASKS } from "../constants/Bar"

function changeUncompletedTasksIndex(state, action) {
  switch (action.type) {
    case CHANGE_UNCOMPLETION_TASKS_INDEX:
      return action.payload
    default:
      return state
  }
}

function deleteAllCompletedTasks(state, action) {
  switch (action.type) {
    case DELETE_ALL_COMPLETED_TASKS:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  changeUncompletedTasksIndex,
  deleteAllCompletedTasks,
})
