import React from 'react';
import ShopItem from './shopItem';

// files
import Plug_img from '../../../../../media/img/Plug_image.jpg'

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
                        img={Plug_img}
                        title={'Solimo Coffee Beans 2kg'}
                        country={'Brazil'}
                        price={'10.73$'}
                    />
                    <ShopItem
                        img={Plug_img}
                        title={'Presto Coffee Beans 1kg'}
                        country={'Brazil'}
                        price={'15.99$'}
                    />
                    <ShopItem
                        img={Plug_img}
                        title={'AROMISTICO Coffee 1kg'}
                        country={'Brazil'}
                        price={'6.99$'}
                    />
                    <ShopItem
                        img={Plug_img}
                        title={'Solimo Coffee Beans 2kg'}
                        country={'Brazil'}
                        price={'10.73$'}
                    />
                    <ShopItem
                        img={Plug_img}
                        title={'Solimo Coffee Beans 2kg'}
                        country={'Brazil'}
                        price={'10.73$'}
                    />
                    <ShopItem
                        img={Plug_img}
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