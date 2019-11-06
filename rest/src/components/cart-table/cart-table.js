import React from 'react';
import './cart-table.scss';

const CartTable = () => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                <div className="cart__item">
                    <img src="https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg" className="cart__item-img" alt="Cesar salad"></img>
                    <div className="cart__item-title">Cesar salad</div>
                    <div className="cart__item-price">12$</div>
                    <div className="cart__close">&times;</div>
                </div>
            </div>
        </>
    );
};

export default CartTable;



// import React from 'react';
// import './cart-table.scss';

// const CartTable = ({ items, onDelete }) => {
//     return (
//         <>
//             <div className="cart__title">Ваш заказ:</div>
//             <div className="cart__list">
//                 {
//                     items.maop(item => {
//                         const { title, price, url, id } = item;
//                         return (
//                             <div key={id} className="cart__item">
//                                 <img src={url} className="cart__item-img" alt={title}></img>
//                                 <div className="cart__item-title">{title}</div>
//                                 <div className="cart__item-price">{price}$</div>
//                                 <div onClick={() => onDelete(id)} className="cart__close">&times;</div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     );
// };

// export default CartTable;