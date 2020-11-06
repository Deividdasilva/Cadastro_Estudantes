import React, { Component } from "react";
import ReactDOM from 'react-dom';

import Nav from "./Nav";
import Form from "./register/Form";
import Edit from "./register/Edit";
import List from "./register/List";

import {
    BrowserRouter as Router,
    Switch,
    Route 
} from "react-router-dom";

function Main(){
    return(
        <Router>
            <main>
                <Nav />
                <Switch>
                    <Route exact path="/register/index" component={List} />
                    <Route path="/register/form" component={Form} />
                    <Route path="/register/edit" component={Edit} />
                </Switch>
            </main>
        </Router>
    );
}

export default Main
ReactDOM.render(<Main />, document.getElementById('main-register'));