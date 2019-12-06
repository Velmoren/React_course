import React from 'react';
import Banner from '../../banner';
import Footer from '../../footer';
import { Link } from 'react-router-dom';

// files
import logoDark from '../../../media/logo/Beans_logo_dark.svg';
import thanks__icon from '../../../media/img/thanks-icon.png';
import arrow__icon from '../../../media/img/back-arrow.png';

// style
import { Col, Row, Container } from 'reactstrap';
import classes from './ThanksPage.module.css';
import classesCommon from '../../app/App.module.css';

const { title, beanslogo } = classesCommon;
const { thanksPage, big__text, btn } = classes;

const ThanksPage = () => {
    return (
        <>
            <Banner text={'Thank - you'} />
            <section className={thanksPage}>
                <Container>
                    <Row>
                        <Col lg={{ size: '6', offset: 3 }}>
                            <div className={title}>About Us</div>
                            <img className={beanslogo} src={logoDark} alt="Beans logo" />
                            <div className={`${title} ${big__text}`}>
                                <p>Thank you so much</p>
                                <p>We contact you as soon as posible</p>
                                <img src={thanks__icon} alt="thanks-icon" />
                            </div>
                            <Link
                                className={btn}
                                color="secondary"
                                style={{ textDecoration: 'none' }}
                                to={'/'}
                            >
                                Another ? <img src={arrow__icon} alt='arrow' />
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}
export default ThanksPage;