import React, { Component } from "react";
// import PostListItemEdit from "../post-list-item-edit";
import EditItem from '../editItem'

import './post-list-item.css';
export default class PostListItem extends Component {
    state = {
        visible: false
    }
    onImportant = () => {
        this.setState(({ important }) => ({
            important: !important
        }))
    }
    onLike = () => {
        this.setState(({ like }) => ({
            like: !like
        }))
    }
    onEdit = () => {
        this.setState(({ visible }) => ({
            visible: !visible
        }))
    }
    onChange = (body) => {
        this.onEdit()
        this.props.onEdit(body)
    }
    render = () => {
        const { important, like, label, onDelete, onToggleImportant, onToggleLiked } = this.props;

        const { visible } = this.state;

        const date = new Date().toLocaleString("ru");

        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) classNames += ' important';
        if (like) classNames += ' like';

        const editForm = visible ? <EditItem label={label} onChange={this.onChange} /> : null;

        return (
            <>
                <div className={classNames}>
                    <span
                        className="app-list-item-label"
                        onClick={onToggleLiked}>
                        {label}
                    </span>
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-center align-items-center">
                            <button
                                type="button"
                                className="btn-star btn-sm"
                                onClick={onToggleImportant}>
                                <i className="fa fa-star"></i>
                            </button>
                            <button
                                type="button"
                                className="btn-trash btn-sm"
                                onClick={onDelete}>
                                <i className="fa fa-trash-o"></i>
                            </button>
                            <button
                                type="button"
                                className="btn-edit btn-sm"
                                onClick={this.onEdit}
                            >
                                <i className="fa fa-pencil-square-o"></i>
                            </button>
                            <i className="fa fa-heart"></i>
                        </div>
                        <span className="post-list-item-date align-self-start">{date}</span>
                    </div>
                </div>
                {editForm}
            </>
        )
    }
};