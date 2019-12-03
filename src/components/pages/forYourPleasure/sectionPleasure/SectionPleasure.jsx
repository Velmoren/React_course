import React, { Component } from 'react';
import Footer from '../../../footer';
import BlockDescription from '../../../blocks/blockDescription';
import BlockItems from '../../../blocks/blockItems';
import Data from '../../../../services/dataService/dataService';
import Spinner from '../../../spinner';

// files
import Cup__img from '../../../../media/img/Cup_image.jpg';

// style
import { Container } from 'reactstrap';
import classNameNamees from './SectionPleasure.module.css';
import classNameNameesCommon from '../../../app/App.module.css';

const { shop } = classNameNamees;
const { line } = classNameNameesCommon;

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

    render() {

        const { items, loading } = this.state;

        const content = loading ? <Spinner /> : <BlockItems items={items} cursor={'auto'} active={false} />;

        console.log(items);


        return (
            <section className={shop} >
                <Container>
                    <BlockDescription image={Cup__img} />
                    <div className={line}></div>
                    {content}
                    <Footer />
                </Container >
            </section>
        )
    }
}