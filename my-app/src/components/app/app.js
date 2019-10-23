import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../header';
import GotService from '../../services/gotService';
import { CharacterPage, HousePage, BookPage, BooksItem } from '../pages'
import RandomItem from '../randomModule/randomItem'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

export default class App extends Component {

    gotService = new GotService();

    async consoleOutput() {

        await this.gotService.getRoot()
            .then(res => console.log('Root', res));

        await this.gotService.getAllBooks()
            .then(res => console.log('AllBooks', res))

        await this.gotService.getAllHouses()
            .then(res => console.log('AllHouses', res))

        await this.gotService.getAllCharacters()
            // для вывода отдельных пунктов res.forEach(item => console.log(item.name))
            .then(res => console.log('AllCharacters', res));

        this.gotService.getBook(2)
            .then(res => console.log('Book 2', res))

        this.gotService.getHouse(41)
            .then(res => console.log('House 41', res))

        this.gotService.getCharacter(103)
            .then(res => console.log('Character 103', res))
    }

    render() {

        // this.consoleOutput();

        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Route path='/' exact component={RandomItem} />
                        <Route path='/characters' component={CharacterPage} />
                        <Route path='/houses' component={HousePage} />
                        <Route path='/books' exact component={BookPage} />
                        <Route path='/books/:id' render={
                            ({ match }) => {
                                const { id } = match.params;

                                return <BooksItem bookId={id} />
                            }
                        } />
                    </Container>
                </div>
            </Router>
        );
    }
}