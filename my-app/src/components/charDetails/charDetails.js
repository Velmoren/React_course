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

// const SelectError = styled.span`
//     color: #fff;
//     text-align: center;
//     font-size: 26px;
// `


export default class CharDetails extends Component {

    gotService = new GotService();

    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
            this.updateChar();
        }, 500);
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }
    updateChar() {

        const { charId } = this.props;
        if (!charId) {
            return
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({ char })
            })
            .catch(this.onError)
        // this.foo.bar = 0;
    }

    render() {
        const { char, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <ViewDetail char={char} /> : null;



        return (
            <HeaderBlock className="rounded">
                {errorMessage}
                {spinner}
                {content}
            </HeaderBlock >
        );
    }
}

const ViewDetail = ({ char }) => {

    const { name, gender, born, died, culture } = char

    return (
        <>
            <HeadingFourth>{name}</HeadingFourth>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born</span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died</span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture</span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}