import React from 'react';
import Banner from '../../banner';
import ItemDetails from './itemDetails';
import Footer from '../../footer';

const ItemPage = (props) => {

    const { itemName, type } = props;

    return (
        <>
            <Banner text={'Our Coffee'} />
            <ItemDetails itemName={itemName} type={type} />
            <Footer />
        </>
    )
}

export default ItemPage;