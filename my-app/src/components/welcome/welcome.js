import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import ImgWelcome from './welcome.jpg'
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StdImg = styled.img`
    margin: 0 auto !important;
`

const StdButton = styled(Button)`
    margin: 0 auto !important;
`

const Welcome = () => {
    return (
        <Container>
            <Row>
                <StdImg src={ImgWelcome} aly="asda" />
            </Row>
            <Row>
                <StdButton><Link to='/main/'>Перейти на главную страницу -></Link></StdButton>
            </Row>
        </Container>

    )
}

export default Welcome;