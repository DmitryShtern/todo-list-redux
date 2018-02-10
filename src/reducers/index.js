import { combineReducers } from "redux"
import header from "./header"
import list from "./list"
import bar from "./bar"

export default combineReducers({
  header,
  list,
  bar,
})
