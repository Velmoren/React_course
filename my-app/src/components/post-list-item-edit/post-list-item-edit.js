import React, { Component } from "react";
import { Button, Form, Input } from 'reactstrap';

import './post-list-item-edit.css';

export default class PostListItemEdit extends Component {
    state = {
        edit: this.props.edit,
        classVisible: ' d-none'
    }
    onVisible = () => {

        this.setState(({ edit }) => ({
            edit: !edit
        }))
    }
    render() {
        const { edit, onEdit } = this.props;

        edit ? this.classVisible = ' d-flex' : this.classVisible = ' d-none'

        let classNames = 'botoom-panel' + this.classVisible;

        return (

            <Form className={classNames}>
                <Input
                    type="text"
                    className="edit-post-label"
                    placeholder={this.props.label}
                />
                <Button
                    outline
                    color="secondary"
                    type="button"
                    onClick={() => {
                        onEdit(document.querySelector('.edit-post-label').value);
                    }}
                    className="btn btn-outline-secondary btn-edit-post">
                    Изменить
                </Button>
            </Form>
        )
    }
}