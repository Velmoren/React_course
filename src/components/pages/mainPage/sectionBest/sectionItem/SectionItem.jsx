import React from 'react';

// files

// style
import classes from './SectionItem.module.css';

const { item, item__title, item__price } = classes;

const SectionItem = (props) => {

    const { src, name, price } = props;

    return (
        <div className={item}>
            <img src={src} alt={name} />
            <div className={item__title}>{name}</div>
            <div className={item__price}>{price}</div>
        </div>
    )
}

export default SectionItem;