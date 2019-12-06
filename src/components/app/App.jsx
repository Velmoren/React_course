import React, { Component } from 'react';
import MainPage from '../pages/mainPage';
import OurCoffeePage from '../pages/ourCoffeePage';
import ForYourPleasure from '../pages/forYourPleasure';
import Contacts from '../pages/contacts';
import ItemPage from '../pages/itemPage';
import ThanksPage from '../pages/thanksPage';
import { Switch, Route } from 'react-router-dom';


// style
// import styleProps from './App.module.css';

class App extends Component {
  render() {

    return (
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/ourCoffe' exact component={OurCoffeePage} />
        <Route path='/Coffee' exact component={ForYourPleasure} />
        <Route path='/Contacts' exact component={Contacts} />
        <Route path='/Contacts/thank-you' exact component={ThanksPage} />
        <Route path='/coffee-item/:name' render={
          ({ match }) => {
            const { name } = match.params;
            const newName = name.replace(":", "");
            return <ItemPage itemName={newName} />
          }
        } />
      </Switch >
    );
  }
}

export default App;
