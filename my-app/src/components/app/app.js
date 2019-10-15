import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services/gotService';


export default class App extends Component {

consoleOutput() {
    const got = new GotService();

    got.getRoot()
        .then(res => console.log('Root', res));
    
    got.getAllBooks() 
        .then(res => console.log('AllBooks', res))
    
    got.getBook(2) 
        .then(res => console.log('Book 2', res))
    
    got.getAllHouses() 
        .then(res => console.log('AllHouses', res))
    
    got.getHouse(41) 
        .then(res => console.log('House 41', res))
    
    got.getAllCharacters()
    // для вывода отдельных пунктов res.forEach(item => console.log(item.name))
        .then(res => console.log('AllCharacters', res));
        
    got.getCharacter(103) 
        .then(res => console.log('Character 103', res))
    }
render() {

    this.consoleOutput();
    
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomChar/>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
}