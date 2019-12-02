import React from 'react';
import Footer from '../../../footer';
import BlockDescription from './blockDescription';
import BlockSearch from './blockSearch';
import BlockItems from './blockItems';

// files

// style
import { Container } from 'reactstrap';
import classNameNamees from './SectionShop.module.css';
import classNameNameesCommon from '../../../app/App.module.css';

const { shop } = classNameNamees;
const { line } = classNameNameesCommon;

const SectionShop = (props) => {
    return (
        <section className={shop}>
            <Container>
                <BlockDescription />
                <div className={line}></div>
                <BlockSearch />
                <BlockItems />
                <Footer />
            </Container >
        </section>
    )
}

export default SectionShop;