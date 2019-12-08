import React from 'react';

// style
import classes from './BlockItem.module.css';

const { card__img, card__title, card__country, card__price } = classes;

const BlockItem = (props) => {

  const { name, country, url, price } = props.item;
  return (
    <>
      <img src={url} alt="coffee" className={card__img} />
      <div className={card__title}>
        {name}
      </div>
      <div className={card__country}>{country}</div>
      <div className={card__price}>{price}</div>
    </>
  )
}

export default BlockItem;