import React, { Component } from 'react';
import ItemDetails, { Field } from '../itemDetails';
import GotService from '../../services/gotService';

import myDb from '../../services/imagesBook/imagesBook.json';

import styled from 'styled-components';

const StdImg = styled.img`
    width: 300px;
    margin: 0 auto;
`

export default class BooksItem extends Component {

    gotService = new GotService();

    render() {
        const { urls } = myDb;
        const { url } = urls.filter((item) => item.id === +this.props.bookId)[0];

        return (
            <ItemDetails
                itemId={this.props.bookId}
                getInfo={this.gotService.getBook}
                renderItem={(item) => item.name}
                getMessage={'Please select a Book'}
            >
                <StdImg src={url} alt='asda' />
                <Field field='authors' label='Authors' />
                <Field field='isbn' label='isbn' />
                <Field field='numberOfPages' label='Number of pages' />
            </ItemDetails>
        )
    }
}