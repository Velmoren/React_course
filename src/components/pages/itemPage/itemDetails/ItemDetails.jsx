import React, { Component } from 'react';
import Spinner from '../../../spinner';
import firebase from '../../../../services/firebase';

// files
import logo__dark__img from '../../../../media/logo/Beans_logo_dark.svg';

// style
import { Col, Row, Container } from 'reactstrap';
import classNamees from './ItemDetails.module.css';
import classNameesCommon from '../../../app/App.module.css';

const { shop, shop__girl, shop__point, shop__point__price } = classNamees;
const { title, beanslogo } = classNameesCommon;

export default class ItemDetails extends Component {
    state = {
        items: null,
        loading: true,
        error: false,
        item: null
    }

    componentDidMount() {
        setTimeout(() => {
            firebase
                .database()
                .ref()
                .child('coffee')
                .once('value')
                .then(snapshot => this.setState({ items: snapshot.val() }))
                .then(() => {
                    let item = this.state.items.filter(item => item.name === this.props.itemName)
                    this.setState({ item: item[0] })
                    this.setState({ loading: false })
                })
        }, 400);
    }

    render() {

        const { item, loading } = this.state;

        let content = loading ? <Spinner /> : <ViewDetails item={item} />

        return (
            <>
                {content}
            </>
        )
    }
}

const ViewDetails = (props) => {



    const { country, url, price, description } = props.item;

    return (
        <section className={shop} >
            <Container>
                <Row>
                    <Col lg={{ size: '6', offset: 1 }}>
                        <img className={shop__girl} src={url} alt="coffee_item" />
                    </Col>
                    <Col lg='4'>
                        <div className={title}>About it</div>
                        <img className={beanslogo} src={logo__dark__img} alt="Beans logo" />
                        <div className={shop__point}>
                            <span>Country:</span>
                            {country}
                        </div>
                        <div className={shop__point}>
                            <span>Description:</span>
                            {description}
                        </div>
                        <div className={shop__point}>
                            <span>Price:</span>
                            <span className={shop__point__price}>{price}</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}