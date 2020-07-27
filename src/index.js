import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import './index.css';
import App from './containers/App';
import  "./redux/redux";
import store from "./redux/redux"
import * as serviceWorker from './serviceWorker';
import State from "./redux/state"


// setTimeout(()=>{
//   stor.dispatch({type:"ADD_BOOK",text:"ti pidor"});
// },1000);
var Store = store()

const Show = (state) => {
  ReactDOM.render(
<BrowserRouter>
  <Provider store={state}>
    <App />
    </Provider>
</BrowserRouter> , document.getElementById('root'));
}
Show(Store);
State.Subscribe(Show)





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
