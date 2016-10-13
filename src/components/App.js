import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import './../styles/App.css';

import Login from './Login/Login.react';
import Register from './Register/Register.react';
import Workspace from './Workspace/Workspace.react';
import Dashboard from './Workspace/Dashboard/Dashboard.react';
import Orders from './Workspace/Orders/Orders.react';
import Products from './Workspace/Products/Products.react';
import Settings from './Workspace/Settings/Settings.react';

import { syncHistoryWithStore } from 'react-router-redux';
import store from '../store';

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Route path='/' component={Login} />
                <Route path='register' component={Register} />
                <Route path='workspace' component={Workspace}>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/orders" component={Orders}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/settings" component={Settings}/>
                </Route>
            </Router>
        );
    }
}

export default App;