import React from 'react';
import Header from '../header';

// style
import { Col, Row, Container } from 'reactstrap';
import classes from './Banner.module.css';
import classesCommon from '../../components/app/App.module.css';

const { banner, banner__title } = classes;
const { title__big } = classesCommon;

const Banner = (props) => {

  const { text } = props;

  return (
    <div className={banner}>
      <Container>
        <Row>
          <Col lg='6'>
            <Header />
          </Col>
        </Row>
        <h1 className={`${title__big} ${banner__title}`}>{text}</h1>
      </Container>
    </div>
  )
}

export default Banner;