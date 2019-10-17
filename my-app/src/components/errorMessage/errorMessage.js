import React from 'react';
import errorImg from './error.jpg';

import styled from 'styled-components';

const StdImg = styled.img`
    width: 100%;
`

const ErrorMessage = () => {
    return (
        <>
            {/* <StdImg src={process.env.PUBLIC_URL + '/img/error.jpg'} alt="error" /> */}
            <StdImg src={errorImg} alt="error" />
            <span>Kitty, you messed up again!</span>
        </>
    )
}

export default ErrorMessage;