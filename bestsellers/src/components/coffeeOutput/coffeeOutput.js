import React from "react";
import CoffeeCard from '../coffeeCard'
import {Card, CardGroup} from 'reactstrap';

import styled from 'styled-components';

const StdCardGroup = styled(CardGroup)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px 0;
`
const StdCard = styled(Card)`
    margin-bottom: 30px !important;
    flex-basis: 30% !important;
    max-width: 30% !important;
    border: 1px solid black !important;
`

const CoffeeOutput = ({cards}) => {

    const elements = cards.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <StdCard key={id}>
                <CoffeeCard {...itemProps}/>
            </StdCard> 
        )
    });

    return (
        <> 
            <h3>Coffee</h3>

            <StdCardGroup>
                {elements}
            </StdCardGroup>
        </>
    )
}

export default CoffeeOutput;