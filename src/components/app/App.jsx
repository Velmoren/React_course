import React from 'react';
import MainPage from '../pages/mainPage';
import OurCoffeePage from '../pages/ourCoffeePage';
import ForYourPleasure from '../pages/forYourPleasure';
import { Switch, Route } from 'react-router-dom';

// style
// import styleProps from './App.module.css';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={MainPage} />
      <Route path='/ourCoffe' exact component={OurCoffeePage} />
      <Route path='/Coffee' exact component={ForYourPleasure} />
    </Switch>
  );
}

export default App;
