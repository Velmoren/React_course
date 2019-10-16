import React, { Component } from "react";
import {CardImg, CardTitle, CardSubtitle, CardBody} from 'reactstrap';

import styled from 'styled-components';

const StdCardBody = styled(CardBody)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`

export default class BestsellerCard extends Component {
    render() {

        const {name, url, price} = this.props;
        return (
            <>
                <CardImg top width="100%" src={url} alt={name} />
                <StdCardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{price}</CardSubtitle>
                </StdCardBody>
            </>
        )
    }
}