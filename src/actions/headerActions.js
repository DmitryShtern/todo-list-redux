import { ADD_TASK } from "../constants/Header"
import { CHANGE_ALL_TASKS_COMPLETION } from "../constants/Header"

export function addTask(name) {
  return {
    type: ADD_TASK,
    payload: name,
  }
}

export function changeAllTasksCompletion(completion) {
  return {
    type: CHANGE_ALL_TASKS_COMPLETION,
    payload: completion,
  }
}
