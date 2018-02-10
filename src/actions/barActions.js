import { CHANGE_UNCOMPLETION_TASKS_INDEX } from "../constants/Bar"
import { DELETE_ALL_COMPLETED_TASKS } from "../constants/Bar"

export function changeUncompletedTasksIndex(tasks) {
  return {
    type: CHANGE_UNCOMPLETION_TASKS_INDEX,
    payload: tasks,
  }
}

export function deleteAllCompletedTasks(tasks) {
  return {
    type: DELETE_ALL_COMPLETED_TASKS,
    payload: tasks,
  }
}

export function filter(tasks) {
  // return {
  //   type: FILTER,
  //   payload: tasks
  // }
}
