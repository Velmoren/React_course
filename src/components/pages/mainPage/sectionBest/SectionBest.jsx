import React, { Component } from 'react';
import BlockItems from '../../../blocks/blockItems'
import Data from '../../../../services/dataService/dataService';
import Spinner from '../../../spinner'
import { withRouter } from 'react-router-dom';

// files

// style
import { Container } from 'reactstrap';
import classes from './SectionBest.module.css';
import classesCommon from '../../../app/App.module.css';

const { best } = classes;
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

    render() {
        const { items, loading } = this.state;

        const content = loading ? <Spinner /> :
            <BlockItems
                items={items}
                cursor={'pointer'}
                active={true}
                onItemSelected={(index) => { this.props.history.push(`/${index}`) }}
            />

        return (
            <section className={best} >
                <Container className="container">
                    <div className={title}>Our best</div>
                    {content}
                </Container>
            </section>
        )
    }
}

export default withRouter(SectionBest)