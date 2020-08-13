import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RegisterPage from "./App";
import Home from './pages/Home'
import PrivateRoute from './routes/PrivateRoute';
// import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={RegisterPage}></Route>
        <PrivateRoute exact path="/home">
            <Home></Home>
        </PrivateRoute>
    </Switch>
    </BrowserRouter>
, document.getElementById("root"));

// ServiceWorker.unregister();