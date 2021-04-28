import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import App from './containers/App';
import  "./redux/redux";
import store from "./redux/redux"
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';



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






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
