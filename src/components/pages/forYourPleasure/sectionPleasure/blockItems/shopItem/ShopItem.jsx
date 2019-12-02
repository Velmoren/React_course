import React from 'react';

// style
import classes from './ShopItem.module.css';
const { item, item__title, item__country, item__price } = classes;

const ShopItem = (props) => {
    const { img, title, country, price } = props;

    return (
        <div className={item}>
            <img src={img} alt={title} />
            <div className={item__title}>{title}</div>
            <div className={item__country}>{country}</div>
            <div className={item__price}>{price}</div>
        </div>
    )
}

export default ShopItem;