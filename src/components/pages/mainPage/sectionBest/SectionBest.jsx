import React, { Component } from 'react';
import Data from '../../../../services/dataService/dataService';
import BlockItem from '../../../blocks/blockItem';
import Spinner from '../../../spinner'
import { withRouter, Link } from 'react-router-dom';

// files

// style
import { Container, Row, Col } from 'reactstrap';
import classes from './SectionBest.module.css';
import classesCommon from '../../../app/App.module.css';

const { best, wrapper, card } = classes;
const { title } = classesCommon;



class SectionBest extends Component {

    state = {
        items: null,
        loading: true,
        error: false
    }

    myData = new Data();

    componentDidMount() {
        setTimeout(() => {
            this.myData.getItems('/bestsellers/')
                .then(items => {
                    this.setState({ items })
                    this.setState({ loading: false })
                })
        }, 500);
    }

    renderItems(items) {
        return items.map((item, index) => {

            return (
                <Link key={index} className={card} to={`/coffee-item/:${item.name}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <BlockItem item={item} />
                </Link>
            )
        })
    }

    render() {
        const { items, loading } = this.state;

        const content = loading ? <Spinner /> : this.renderItems(items)

        return (
            <section className={best} >
                <Container className="container">
                    <div className={title}>Our best</div>
                    <Row>
                        <Col lg={{ size: '10', offset: 1 }} >
                            <div className={wrapper}>
                                {content}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default withRouter(SectionBest)