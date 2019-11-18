import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';
import RandomChar from '../randomChar'
import ErrorMessage from '../../errorMessage';

import styled from 'styled-components';

const StdButton = styled(Button)`
    margin-bottom: 20px;
`

export default class RandomItem extends Component {
    state = {
        randomCharWindow: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    openRandomChar = () => {
        this.setState(({ randomCharWindow }) => ({
            randomCharWindow: !randomCharWindow
        }))
    }

    render() {

        const viewRandomChar = this.state.randomCharWindow ? <RandomChar /> : null;
        const buttonText = this.state.randomCharWindow ? 'Скрыть RandomChar' : 'Показать RandomChar'
        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <Row>
                <Col lg={{ size: 5, offset: 0 }}>
                    {viewRandomChar}
                    <StdButton onClick={this.openRandomChar}>{buttonText}</StdButton>
                </Col>
            </Row>
        )
    }
}