import React, { Component } from 'react';
import ItemList from '../../itemList'
import ItemDetails, { Field } from '../../itemDetails'
import ErrorMessage from '../../errorMessage'
import GotService from '../../../services/gotService'
import RowBlock from '../../rowBlock'

// import styled from 'styled-components';

export default class BookPage extends Component {

    gotService = new GotService();

    state = {
        selectedItem: 2,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {
        const { error } = this.state;


        if (error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={({ name }) => `${name}`}
            />
        )
        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedItem}
                getInfo={this.gotService.getBook}
                renderItem={(item) => item.name}
            >
                <Field field='authors' label='Authors' />
                <Field field='isbn' label='isbn' />
                <Field field='numberOfPages' label='Number of pages' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}


