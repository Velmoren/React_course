import React from 'react';
import Banner from '../../banner';
import ItemDetails from './temDetails';
import Footer from '../../footer';

const ItemPage = () => {
    return (
        <>
            <Banner text={'Our Coffee'} />
            <ItemDetails />
            <Footer />
        </>
    )
}

export default ItemPage;