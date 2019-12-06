import React, { Component } from 'react';
import Footer from '../../../footer';
import BlockDescription from '../../../blocks/blockDescription';
import BlockItem from '../../../blocks/blockItem'
import Data from '../../../../services/dataService/dataService';
import Spinner from '../../../spinner';

// files
import Cup__img from '../../../../media/img/Cup_image.jpg';

// style
import { Container, Row, Col } from 'reactstrap';
import classes from './SectionPleasure.module.css';
import classesCommon from '../../../app/App.module.css';

const { shop, wrapper, card } = classes;
const { line } = classesCommon;

export default class SectionPleasure extends Component {

    state = {
        items: null,
        loading: true,
        error: false
    }

    myData = new Data();

    componentDidMount() {
        setTimeout(() => {
            this.myData.getItems('/goods/')
                .then(items => {
                    this.setState({ items })
                    this.setState({ loading: false })
                })
        }, 500);
    }

    renderItems(items) {
        return items.map((item, index) => {

            return (

                <div key={index} className={card}>
                    <BlockItem item={item} />
                </div>
            )
        })
    }

    render() {

        const { items, loading } = this.state;

        const content = loading ? <Spinner /> : this.renderItems(items)

        return (
            <section className={shop} >
                <Container>
                    <BlockDescription image={Cup__img} />
                    <div className={line}></div>
                    <Row>
                        <Col lg={{ size: '10', offset: 1 }} >
                            <div className={wrapper}>
                                {content}
                            </div>
                        </Col>
                    </Row>
                    <Footer />
                </Container >
            </section>
        )
    }
}