import {createStore,applyMiddleware} from "redux"
import logger from "redux-logger"
import reducers from './union'
// Инициализация хранилища
export default ()=>{
  const store = createStore(reducers,applyMiddleware(logger));
  return store
}
