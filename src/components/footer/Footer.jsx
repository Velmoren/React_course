import React from 'react';
import FooterItem from './footerItem';


// files
import logo__dark__img from '../../media/logo/Beans_logo_dark.svg';
import logo__black__img from '../../media/logo/Logo_black.svg';

// style
import { Col, Row, Container } from 'reactstrap';
import classes from './Footer.module.css';
import classesCommon from '../app/App.module.css';

const { footer } = classes;
const { beanslogo } = classesCommon;

const Footer = (props) => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg={{ size: '6', offset: 3 }}>
                        <ul className={footer}>
                            <FooterItem content={<img src={logo__black__img} alt="logo" />} link={'/'} />
                            <FooterItem content={'Our coffee'} link={'/ourCoffe'} />
                            <FooterItem content={'For your pleasure'} link={'/Coffee'} />
                            <FooterItem content={'Contact as'} link={'/Contact'} />
                        </ul>
                    </Col>
                </Row>
                <img className={beanslogo} src={logo__dark__img} alt="Beans logo" />
            </Container>
        </footer>
    )
}

export default Footer;