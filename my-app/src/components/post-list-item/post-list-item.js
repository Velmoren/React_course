import React, {Component} from "react";

import './post-list-item.css';
// подготовка
export default class PostListItem extends Component {
    state = {
        important: false,
        like: false
    }
    onImportant = () => {
        this.setState(({important}) => ({
            important: !important
        }))
    }
    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }
    render() {

        const {label} = this.props;
        const {important, like} = this.state;
        const date = new Date().toLocaleString("ru");

        let classNames = 'app-list-item d-flex justify-content-between';

        if(important) {
            classNames += ' important';
        }

        if(like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span 
                    className="app-list-item-label"
                    onClick={this.onLike}>
                    {label}
                </span>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-center align-items-center"> 
                        <button 
                            type="button" 
                            className="btn-star btn-sm"
                            onClick={this.onImportant}>
                            <i className="fa fa-star"></i>
                        </button>
                        <button 
                            type="button" 
                            className="btn-trash btn-sm">
                            <i className="fa fa-trash-o"></i>
                        </button>
                        <i className="fa fa-heart"></i>
                    </div>
                    <span className="post-list-item-date align-self-start">{date}</span>
                </div>
            </div>
        )
    }
};