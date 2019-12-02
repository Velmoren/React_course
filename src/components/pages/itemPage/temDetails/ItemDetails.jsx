import React from 'react';

// files
import item__img from '../../../../media/img/coffee_item.jpg';
import logo__dark__img from '../../../../media/logo/Beans_logo_dark.svg';

// style
import { Col, Row, Container } from 'reactstrap';
import classNamees from './ItemDetails.module.css';
import classNameesCommon from '../../../app/App.module.css';

const { shop, shop__girl, shop__point, shop__point__price } = classNamees;
const { title, beanslogo } = classNameesCommon;

const ItemDetails = () => {
    return (
        <section className={shop}>
            <Container>
                <Row>
                    <Col lg={{ size: '5', offset: 1 }}>
                        <img className={shop__girl} src={item__img} alt="coffee_item" />
                    </Col>
                    <Col lg='4'>
                        <div className={title}>About it</div>
                        <img className={beanslogo} src={logo__dark__img} alt="Beans logo" />
                        <div className={shop__point}>
                            <span>Country:</span>
                            Brazil
                        </div>
                        <div className={shop__point}>
                            <span>Description:</span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </div>
                        <div className={shop__point}>
                            <span>Price:</span>
                            <span className={shop__point__price}>16.99$</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ItemDetails;