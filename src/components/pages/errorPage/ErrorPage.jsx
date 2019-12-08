import React from 'react';
import Banner from '../../banner';
import Footer from '../../footer';
import { Link } from 'react-router-dom';

// files
import logoDark from '../../../media/logo/Beans_logo_dark.svg';
import arrow__icon from '../../../media/img/back-arrow.png';

// style
import { Col, Row, Container } from 'reactstrap';
import classes from './ErrorPage.module.css';
import classesCommon from '../../app/App.module.css';

const { big__text, btn } = classes;
const { title, beanslogo } = classesCommon;


const ErrorPage = () => {
  return (
    <>
      <Banner text={"Sorry, it's error"} />
      <section>
        <Container>
          <Row>
            <Col lg={{ size: '6', offset: 3 }}>
              <div className={title}>Error</div>
              <img className={beanslogo} src={logoDark} alt="Beans logo" />
              <div className={`${title} ${big__text}`}>
                <p>Sorry, an error occurred</p>
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

export default ErrorPage;