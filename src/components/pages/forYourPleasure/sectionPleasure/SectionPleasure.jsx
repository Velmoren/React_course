import React from 'react';
import Footer from '../../../footer';
import BlockDescription from './blockDescription';
import BlockItems from './blockItems';

// files

// style
import { Container } from 'reactstrap';
import classNameNamees from './SectionPleasure.module.css';
import classNameNameesCommon from '../../../app/App.module.css';

const { shop } = classNameNamees;
const { line } = classNameNameesCommon;

const SectionPleasure = (props) => {
    return (
        <section className={shop}>
            <Container>
                <BlockDescription />
                <div className={line}></div>
                <BlockItems />
                <Footer />
            </Container >
        </section>
    )
}

export default SectionPleasure;