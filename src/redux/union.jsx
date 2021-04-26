import {combineReducers} from "redux"
import books from "./actions/books"
import trashBox from "./actions/trashBox"
import login from "./actions/login"


export default combineReducers({login,books,trashBox});
