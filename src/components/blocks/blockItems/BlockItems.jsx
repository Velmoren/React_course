import React from 'react';
import ShopItem from './shopItem';

// files

// style
import { Row, Col } from 'reactstrap';
import classNameNamees from './BlockItems.module.css';

const { wrapper } = classNameNamees;

const BlockItems = (props) => {


    const { items, onItemSelected, cursor, active } = props;

    let itemsArr = items.map((item, index) => {
        const { name, country, url, price } = item
        return (
            <ShopItem key={index}
                img={url}
                title={name}
                country={country}
                price={price}
                onItemSelected={() => { onItemSelected(index) }}
                index={index}
                cursor={cursor}
                active={active}
            />
        )
    })

    return (
        <Row>
            <Col lg={{ size: '10', offset: 1 }} >
                <div className={wrapper}>
                    {itemsArr}
                </div>
            </Col>
        </Row>
    )
}

export default BlockItems;