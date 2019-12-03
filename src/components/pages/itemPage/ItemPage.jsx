import React from 'react';
import Banner from '../../banner';
import ItemDetails from './itemDetails';
import Footer from '../../footer';

const ItemPage = (props) => {

    const { itemId, type } = props;

    return (
        <>
            <Banner text={'Our Coffee'} />
            <ItemDetails itemId={itemId} type={type} />
            <Footer />
        </>
    )
}

export default ItemPage;