import React, { Component } from 'react';
import Spinner from '../spinner';
import GotService from '../../services/gotService'

import styled from 'styled-components';


const ListItem = styled.li`
    cursor: pointer;
`

export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const id = item.url;

            return (
                <ListItem
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(id)}
                >
                    {item.name}
                </ListItem>
            )
        })
    }

    render() {

        const { charList } = this.state;

        if (!charList) {
            return <Spinner />
        }

        const items = this.renderItems(charList)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}