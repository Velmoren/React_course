import React from 'react';
import { Link } from 'react-router-dom';

// style
import classes from './HeaderItem.module.css';
const { item } = classes;

const HeaderItem = (props) => {
    const { content, link } = props;

    return (
        <li className={item}>
            <Link to={link}>
                {content}
            </Link>
        </li>
    )
}

export default HeaderItem;