import React, { Component } from "react";
import { Form, Button, Input } from 'reactstrap';

// import './post-add-form.css';
import styled from 'styled-components';

const StyleForm = styled(Form)`
    margin-top: 20px; 
    display: flex;  
`

const StyleButton = styled(Button)`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`

export default class PostAddForm extends Component {
    state = {
        text: ''
    }
    onValueChenge = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.text !== '') this.props.onAdd(this.state.text)

        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <StyleForm onSubmit={this.onSubmit} >
                <Input
                    type="text"
                    placeholder="О чем вы думаете сейчас"
                    onChange={this.onValueChenge}
                    value={this.state.text}
                />
                <StyleButton
                    className="new-post-label"
                    outline
                    color="secondary"
                    type="submit">
                    Добавить
            </StyleButton>
            </StyleForm >
        )
    }
}