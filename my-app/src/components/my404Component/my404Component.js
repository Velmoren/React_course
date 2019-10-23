import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import ImgErr from './404.png'
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StdButton = styled(Button)`
    margin: 0 auto !important;
`

const My404Component = () => {
    return (
        <Container>
            <Row>
                <img src={ImgErr} alt="asdas" />
            </Row>
            <Row>
                <StdButton><Link to='/main/'>Вернуться на главную страницу</Link></StdButton>

            </Row>
        </Container>
    )
}
export default My404Component;