import React from 'react';
import SectionItem from './sectionItem';

// files

// style
import { Col, Row, Container } from 'reactstrap';
import classes from './SectionBest.module.css';
import classesCommon from '../../../app/App.module.css';

const { best, wrapper } = classes;
const { title } = classesCommon;

const SectionBest = (props) => {
    return (
        <section className={best}>
            <Container className="container">
                <div className={title}>Our best</div>
                <Row>
                    <Col lg={{ size: '10', offset: 1 }}>
                        <div className={wrapper}>
                            <SectionItem
                                src={'https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg'}
                                name={'Solimo Coffee Beans 2kg'}
                                price={'10.73$'} />
                            <SectionItem
                                src={'https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg'}
                                name={'Presto Coffee Beans 1kg'}
                                price={'15.99$'} />
                            <SectionItem
                                src={'https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg'}
                                name={'AROMISTICO Coffee 1kg'}
                                price={'6.99$'} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SectionBest;