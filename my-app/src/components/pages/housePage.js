import React, { Component } from 'react';
import ItemList from '../itemList'
import ItemDetails, { Field } from '../itemDetails'
import ErrorMessage from '../errorMessage'
import GotService from '../../services/gotService'
import RowBlock from '../rowBlock'

// import styled from 'styled-components';

export default class HousePage extends Component {

    gotService = new GotService();

    state = {
        selectedItem: 60,
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
                getData={this.gotService.getAllHouses}
                renderItem={({ name }) => `${name}`}
            />
        )
        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedItem}
                getInfo={this.gotService.getHouse}
                renderItem={(item) => item.name}
                getMessage={'Please select a House'}
            >
                <Field field='region' label='Region' />
                <Field field='words' label='Words' />
                <Field field='titles' label='Titles' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}


