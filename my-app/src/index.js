import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import My404Component from './components/my404Component'
import Welcome from './components/welcome'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/main/" component={App} />
            <Route path="*" component={My404Component} />
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));