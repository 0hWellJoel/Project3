import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RegisterPage from "./App";
import Home from './pages/Home'

// import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={RegisterPage}></Route>
        <Route exact path="/home" component={Home}></Route>
    </Switch>
    </BrowserRouter>
, document.getElementById("root"));

// ServiceWorker.unregister();