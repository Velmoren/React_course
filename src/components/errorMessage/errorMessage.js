import React from 'react';
import errorImg from './error.jpg';

import styled from 'styled-components';

const StdImg = styled.img`
    width: 100%;
`
const StdSpan = styled.span`
    color: red;
`

const ErrorMessage = () => {
    return (
        <>
            {/* <StdImg src={process.env.PUBLIC_URL + '/img/error.jpg'} alt="error" /> */}
            <StdImg src={errorImg} alt="error" />
            <StdSpan>Kitty, you messed up again!</StdSpan>
        </>
    )
}

export default ErrorMessage;