import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage'

import styled from 'styled-components';

const StdButton = styled(Button)`
    margin-bottom: 20px;
`

export default class App extends Component {
    state = {
        randomCharWindow: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    async consoleOutput() {
        const got = new GotService();

        await got.getRoot()
            .then(res => console.log('Root', res));

        await got.getAllBooks()
            .then(res => console.log('AllBooks', res))

        await got.getAllHouses()
            .then(res => console.log('AllHouses', res))

        await got.getAllCharacters()
            // для вывода отдельных пунктов res.forEach(item => console.log(item.name))
            .then(res => console.log('AllCharacters', res));

        got.getBook(2)
            .then(res => console.log('Book 2', res))

        got.getHouse(41)
            .then(res => console.log('House 41', res))

        got.getCharacter(103)
            .then(res => console.log('Character 103', res))
    }

    openRandomChar = () => {
        this.setState(({ randomCharWindow }) => ({
            randomCharWindow: !randomCharWindow
        }))
    }

    render() {

        // this.consoleOutput();

        const viewRandomChar = this.state.randomCharWindow ? <RandomChar /> : null;
        const buttonText = this.state.randomCharWindow ? 'Скрыть RandomChar' : 'Показать RandomChar'
        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {viewRandomChar}
                            <StdButton onClick={this.openRandomChar}>{buttonText}</StdButton>
                        </Col>
                    </Row>
                    <CharacterPage />
                    {/* <CharacterPage />
                    <CharacterPage /> */}
                </Container>
            </>
        );
    }
}