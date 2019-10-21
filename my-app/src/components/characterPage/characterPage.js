import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ItemList from '../itemList'
import CharDetails from '../charDetails'
import ErrorMessage from '../errorMessage'
import Spinner from '../spinner';

// import styled from 'styled-components';






export default class CharacterPage extends Component {

    state = {
        selectedChar: 130,
        error: false,
        loading: true
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    componentDidMount() {
        this.setState({
            loading: false
        })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        const { loading, error } = this.state;

        if (error) {
            return <ErrorMessage />
        }
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <ItemList onCharSelected={this.onCharSelected} /> : null;

        return (
            <Row>
                <Col md='6'>
                    {spinner}
                    {content}
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar} />
                </Col>
            </Row>
        )
    }
}


