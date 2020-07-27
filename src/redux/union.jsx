import {combineReducers} from "redux"
import books from "./actions/books"
import trashBox from "./actions/trashBox"
import login from "./actions/login"
import Store from "./state"

export default combineReducers({login,books,trashBox,Store});
