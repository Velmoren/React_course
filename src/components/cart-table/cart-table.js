import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFromCard } from '../../actions/index'

const CartTable = ({ items, noFilteredItems, deleteFromCard }) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const { title, price, url, id } = item;
                        const count = noFilteredItems.filter(item => item.id === id).length;

                        return (
                            <div className="cart__item" key={id}>
                                <img src={url} className="cart__item-img" alt="Cesar salad"></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{count} pieces</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => deleteFromCard(id, count, price)} className="cart__close" >&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({ items, noFilteredItems }) => {

    return {
        items,
        noFilteredItems
    }
};

const maoDispatchToProps = {
    deleteFromCard
};

export default connect(mapStateToProps, maoDispatchToProps)(CartTable);