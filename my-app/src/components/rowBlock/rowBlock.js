import React from 'react';
import { Col, Row } from 'reactstrap';

import styled from 'styled-components';

const StdRow = styled(Row)`
    margin-bottom: 20px;
`
const RowBlock = ({ left, right }) => {
    return (
        <StdRow>
            <Col md='6'>
                {left}
            </Col>
            <Col md='6'>
                {right}
            </Col>
        </StdRow>
    )
}

export default RowBlock;