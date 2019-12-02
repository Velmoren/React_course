import React from 'react';
import ShopItem from './shopItem';

// files

// style
import { Row, Col } from 'reactstrap';
import classNameNamees from './BlockItems.module.css';

const { wrapper } = classNameNamees;

const BlockItems = (props) => {
    return (
        <Row>
            <Col lg={{ size: '10', offset: 1 }} >
                <div className={wrapper}>
                    <ShopItem
                        img={'https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg'}
                        title={'Solimo Coffee Beans 2kg'}
                        country={'Brazil'}
                        price={'10.73$'}
                    />
                    <ShopItem
                        img={'https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg'}
                        title={'Presto Coffee Beans 1kg'}
                        country={'Brazil'}
                        price={'15.99$'}
                    />
                    <ShopItem
                        img={'https://hhp-blog.s3.amazonaws.com/2018/07/iStock-673468996.jpg'}
                        title={'AROMISTICO Coffee 1kg'}
                        country={'Brazil'}
                        price={'6.99$'}
                    />
                    <ShopItem
                        img={'https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg'}
                        title={'Solimo Coffee Beans 2kg'}
                        country={'Brazil'}
                        price={'10.73$'}
                    />
                    <ShopItem
                        img={'https://i0.wp.com/www.healthline.com/hlcmsresource/images/AN_images/AN275-cup-of-coffee-732x549-Thumb.jpg?w=756'}
                        title={'Solimo Coffee Beans 2kg'}
                        country={'Brazil'}
                        price={'10.73$'}
                    />
                    <ShopItem
                        img={'https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg'}
                        title={'Solimo Coffee Beans 2kg'}
                        country={'Brazil'}
                        price={'10.73$'}
                    />
                </div>
            </Col>
        </Row>
    )
}

export default BlockItems;