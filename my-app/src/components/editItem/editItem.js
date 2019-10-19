import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';

export default class EditItem extends Component {
    state = {
        value: this.props.label
    }
    onChange = (event) => {
        this.setState({ value: event.target.value });
    }
    sendEdit = () => {
        this.props.onChange(this.state.value)
    }
    render() {

        // const { onChange } = this.props;

        return (
            <Form className='botoom-panel d-flex'>
                <Input
                    type="text"
                    className="edit-post-label"
                    defaultValue={this.state.value}
                    onChange={this.onChange}
                />
                <Button
                    outline
                    color="secondary"
                    type="button"
                    onClick={this.sendEdit}
                    className="btn btn-outline-secondary btn-edit-post">
                    Изменить
            </Button>
            </Form>
        )
    }
}