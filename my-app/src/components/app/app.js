import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../header';
import GotService from '../../services/gotService';
import CharacterPage from '../pages/characterPage'
import HousePage from '../pages/housePage'
import BookPage from '../pages/bookPage'
import RandomItem from '../randomModule/randomItem'

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
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <RandomItem />
                    <CharacterPage />
                    <HousePage />
                    <BookPage />
                </Container>
            </>
        );
    }
}