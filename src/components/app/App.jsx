import React from 'react';
import MainPage from '../pages/mainPage';
import OurCoffeePage from '../pages/ourCoffeePage';
import ForYourPleasure from '../pages/forYourPleasure';
import ItemPage from '../pages/itemPage';
import { Switch, Route } from 'react-router-dom';

// style
// import styleProps from './App.module.css';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={MainPage} />
      <Route path='/ourCoffe' exact component={OurCoffeePage} />
      <Route path='/Coffee' exact component={ForYourPleasure} />
      <Route path='/ourCoffe/:id' render={
        ({ match }) => {
          const { id } = match.params;
          return <ItemPage itemId={id} type={'/coffee/'} />
        }
      } />
      <Route path='/:id' render={
        ({ match }) => {
          const { id } = match.params;
          return <ItemPage itemId={id} type={'/bestsellers/'} />
        }
      } />
    </Switch>
  );
}

export default App;
