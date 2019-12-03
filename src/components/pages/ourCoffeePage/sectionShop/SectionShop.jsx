import React, { Component } from 'react';
import Footer from '../../../footer';
import BlockDescription from '../../../blocks/blockDescription';
import BlockSearch from '../../../blocks/blockSearch';
import BlockItems from '../../../blocks/blockItems';
import Data from '../../../../services/dataService/dataService';
import Spinner from '../../../spinner';
import { withRouter } from 'react-router-dom';

// files
import girl__img from '../../../../media/img/coffee_girl.jpg';

// style
import { Container } from 'reactstrap';
import classNameNamees from './SectionShop.module.css';
import classNameNameesCommon from '../../../app/App.module.css';

const { shop } = classNameNamees;
const { line } = classNameNameesCommon;

class SectionShop extends Component {
    state = {
        items: null,
        loading: true,
        error: false
    }

    myData = new Data();

    componentDidMount() {
        setTimeout(() => {
            this.myData.getItems('/coffee/')
                .then(items => {
                    this.setState({ items })
                    this.setState({ loading: false })
                })
        }, 500);
    }

    render() {

        const { items, loading } = this.state;

        const content = loading ? <Spinner /> :
            <BlockItems
                items={items}
                cursor={'pointer'}
                active={true}
                onItemSelected={(index) => { this.props.history.push(`/ourCoffe/${index}`) }} />;

        return (
            <section className={shop} >
                <Container>
                    <BlockDescription image={girl__img} />
                    <div className={line}></div>
                    <BlockSearch />
                    {content}
                    <Footer />
                </Container >
            </section>
        )
    }
}

export default withRouter(SectionShop)
