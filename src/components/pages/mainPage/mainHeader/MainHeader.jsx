import React from 'react';
import Header from '../../../header';
import { Link } from 'react-router-dom';

// files
import beanslogo__img from '../../../../media/logo/Beans_logo.svg'

// style
import { Col, Row, Container } from 'reactstrap';
import classes from './MainHeader.module.css';
import classesCommon from '../../../app/App.module.css';

const { preview } = classes;
const { title__big, subtitle, button, beanslogo } = classesCommon;

const MainHeader = () => {
  return (
    <div className={preview}>
      <Container>
        <Row>
          <Col lg='6'>
            <Header />
          </Col>
        </Row>
        <Row className="row">
          <Col lg={{ size: '10', offset: 1 }}>
            <h1 className={title__big}>Everything You Love About Coffee</h1>
            <img className={beanslogo} src={beanslogo__img} alt="Beans logo" />
            <div className={subtitle}>We makes every day full of energy and taste</div>
            <div className={subtitle}>Want to try our beans?</div>
            <Link to={'/ourCoffe'} className={button}>More</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MainHeader;