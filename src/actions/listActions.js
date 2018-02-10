import { CHANGE_TASK_COMPLETION } from "../constants/List"
import { EDIT_TASK_NAME } from "../constants/List"
import { DELETE_TASK } from "../constants/List"

export function changeTaskCompletion(completion) {
  return {
    type: CHANGE_TASK_COMPLETION,
    payload: completion,
  }
}

export function editTaskName(name) {
  return {
    type: EDIT_TASK_NAME,
    payload: name,
  }
}

export function deleteTask() {
  return {
    type: DELETE_TASK,
    // payload: id,
  }
}

// export default function combineActions() {
//   changeTaskCompletion(),
//   editTaskName()
// }
