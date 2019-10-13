import React, { Component } from "react";

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
        console.log(edit);

        edit ? this.classVisible = ' d-flex' : this.classVisible = ' d-none'

        let classNames = 'botoom-panel' + this.classVisible;

        return (

            <form className={classNames}>
                <input
                    type="text"
                    className="form-control edit-post-label"
                    placeholder={this.props.label}
                />
                <button
                    type="button"
                    onClick={() => {
                        onEdit(document.querySelector('.edit-post-label').value);
                    }}
                    className="btn btn-outline-secondary btn-edit-post">
                    Изменить
                </button>
            </form>
        )
    }
}