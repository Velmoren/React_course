import React from 'react';

// style
import classes from './ShopItem.module.css';
const { item, item__title, item__country, item__price } = classes;

const ShopItem = (props) => {

    const { img, title, country, price, onItemSelected, index, cursor, active } = props;

    let divStyle = {
        cursor: `${cursor}`
    };

    const activeBlock = (index) => {
        if (!active) {
            return
        }
        onItemSelected(index)
    }

    return (
        <div className={item} onClick={() => { activeBlock(index) }} style={divStyle}>
            <img src={img} alt={title} />
            <div className={item__title}>{title}</div>
            <div className={item__country}>{country}</div>
            <div className={item__price}>{price}</div>
        </div>
    )
}

export default ShopItem;