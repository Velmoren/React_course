import React from 'react';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Background from './food-bg.jpg';

const App = ({ resultPrice }) => {

    return (
        <div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
            <AppHeader total={resultPrice} />
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/cart' component={CartPage} />
            </Switch>
        </div>
    )
}


const mapStateToProps = ({ resultPrice }) => {

    return {
        resultPrice
    }
};

export default connect(mapStateToProps)(App);