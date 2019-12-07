import React, { Component } from 'react';
import BlockItem from '../../../blocks/blockItem';
import Spinner from '../../../spinner'
import { withRouter, Link } from 'react-router-dom';
import firebase from '../../../../services/firebase';
import ErrorMessage from '../../../errorMessage';

// files

// style
import { Container, Row, Col } from 'reactstrap';
import classes from './SectionBest.module.css';
import classesCommon from '../../../app/App.module.css';

const { best, wrapper, card } = classes;
const { title } = classesCommon;



class SectionBest extends Component {

    state = {
        items: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        setTimeout(() => {
            firebase
                .database()
                .ref()
                .child('bestsellers')
                .once('value')
                .then(snapshot => this.setState({ items: snapshot.val() }))
                .then(() => this.setState({ loading: false }))
                .catch(() => this.setState({ error: true }))
        }, 400);
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
        const { items, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? this.renderItems(items) : null;


        return (
            <section className={best} >
                <Container className="container">
                    <div className={title}>Our best</div>
                    <Row>
                        <Col lg={{ size: '10', offset: 1 }} >
                            <div className={wrapper}>
                                {errorMessage}
                                {spinner}
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