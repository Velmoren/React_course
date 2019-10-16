import React from "react";
import BestsellerCard from '../bestsellerCard'
import {Card, CardGroup} from 'reactstrap';

import styled from 'styled-components';

const StdCardGroup = styled(CardGroup)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px 0;
`
const StdCard = styled(Card)`
    flex-basis: 30% !important;
    max-width: 30%;
    border: 1px solid black !important;
`

const BestsellersOutput = ({cards}) => {

    const elements = cards.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <StdCard key={id}>
                <BestsellerCard {...itemProps}/>
            </StdCard> 
        )
    });

    return (
        <>
            <h3>Bestsellers</h3>

            <StdCardGroup>
                {elements}
            </StdCardGroup>
        </>
    )
}

export default BestsellersOutput;