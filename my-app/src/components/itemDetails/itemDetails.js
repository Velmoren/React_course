import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import GotService from '../../services/gotService'

import styled from 'styled-components';

const HeaderBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`
const HeadingFourth = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`

const SelectError = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
`

const Field = ({ item, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
}

export default class ItemDetails extends Component {

    gotService = new GotService();

    state = {
        item: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
            this.updateItem();
        }, 500);
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }
    updateItem() {

        const { itemId, getInfo } = this.props;

        if (!itemId) {
            return
        }

        getInfo(itemId)
            .then((item) => {
                this.setState({ item })
            })
            .catch(this.onError)
        // this.foo.bar = 0;
    }

    render() {
        const { item, loading, error } = this.state;
        const { getMessage } = this.props;

        // Please select a character
        if (!item && !loading) {
            return <SelectError>{getMessage}</SelectError>
        }

        const ViewDatail = () => {
            const name = this.props.renderItem(item);

            return (

                <HeaderBlock className="rounded">
                    <HeadingFourth>{name}</HeadingFourth>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item })
                            })
                        }
                    </ul>
                </HeaderBlock >
            )
        }

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <ViewDatail /> : null;

        return (
            <>
                {errorMessage}
                {spinner}
                {content}
            </>

        );
    }
}