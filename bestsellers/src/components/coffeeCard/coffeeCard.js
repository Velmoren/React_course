import React, { Component } from "react";
import {CardImg, CardTitle, CardSubtitle, CardBody, CardText} from 'reactstrap';

import styled from 'styled-components';

const StdCardBody = styled(CardBody)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`

export default class CoffeeCard extends Component {
    render() {

        const {name, country, description, url, price} = this.props;
        return (
            <>
                <CardImg top width="100%" src={url} alt={name} />
                <StdCardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                    <CardSubtitle>{country}</CardSubtitle>
                    <CardSubtitle>{price}</CardSubtitle>
                </StdCardBody>
            </>
        )
    }
}