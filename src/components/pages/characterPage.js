import React, { Component } from 'react';
import ItemList from '../itemList'
import ItemDetails, { Field } from '../itemDetails'
import ErrorMessage from '../errorMessage'
import GotService from '../../services/gotService'
import RowBlock from '../rowBlock'

// import styled from 'styled-components';

export default class CharacterPage extends Component {

    gotService = new GotService();

    state = {
        selectedItem: null,
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
                getData={this.gotService.getAllCharacters}
                renderItem={({ name, gender }) => `${name} (${gender})`}
            />
        )
        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedItem}
                getInfo={this.gotService.getCharacter}
                renderItem={(item) => item.name}
                getMessage={'Please select a Character'}
            >
                <Field field='gender' label='Gender' />
                <Field field='born' label='Born' />
                <Field field='died' label='Died' />
                <Field field='culture' label='Culture' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}


