import React from 'react';

// files

// style
import { Col, Row } from 'reactstrap';
import classNameNamees from './BlockSearch.module.css';

const { search__label, search__input, filter, filter__label, filter__btn } = classNameNamees;

const BlockSearch = (props) => {
    return (
        <Row>
            <Col lg={{ size: '4', offset: 2 }}>
                <form action="#" className="shop__search">
                    <label className={search__label} htmlFor="filter">Looking for</label>
                    <input id="filter" type="text" placeholder="start typing here..." className={search__input} />
                </form>
            </Col>
            <Col lg='4'>
                <div className={filter}>
                    <div className={filter__label}>
                        Or filter
                            </div>
                    <div className="shop__filter-group">
                        <button className={filter__btn}>Brazil</button>
                        <button className={filter__btn}>Kenya</button>
                        <button className={filter__btn}>Columbia</button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default BlockSearch;