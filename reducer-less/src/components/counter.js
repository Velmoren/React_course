import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({ counter, plus, minus, reset, download }) => {

    const upload = () => {
        let elem = {};
        elem['saved'] = document.querySelector('.block-text').textContent;
        fetch('http://localhost:3001/numbers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(elem)
        })
            .catch(error => console.error('Ошибка операции', error));
    }

    return (
        <div className="box">
            <div className="block">
                <span className="block-text">{counter}</span>
            </div>
            <div className="buttons">
                <button onClick={plus} className="btn btn-plus"></button>
                <button onClick={minus} className="btn btn-minus"></button>
                <button onClick={reset} className="btn btn-reset"></button>
            </div>
            <div className="buttons buttons-down">
                <button onClick={download} className="btn btn-download"></button>
                <button onClick={upload} className="btn btn-upload"></button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);