import React, { Component } from 'react';

// files

// style
import { Col, Row } from 'reactstrap';
import classNameNamees from './BlockSearchAndFilter.module.css';

const { search__label, search__input, filter, filter__label, filter__btn } = classNameNamees;

export default class BlockSearchAndFilter extends Component {


    state = {
        char: ''
    }

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'Brazil', label: 'Brazil' },
        { name: 'Kenya', label: 'Kenya' },
        { name: 'Columbia', label: 'Columbia' },
    ]

    onUpdateSearch = (e) => {
        const char = e.target.value;
        this.setState({ char });
        this.props.onUpdateSearch(char);
    }

    render() {
        const buttons = this.buttons.map(({ name, label }) => {
            return (
                <button
                    key={name}
                    className={filter__btn}
                    type="button"
                    onClick={() => this.props.onUpdateFilter(name)}>{label}</button>
            )
        })

        return (

            <Row>
                <Col lg={{ size: '4', offset: 1 }}>
                    <form action="#" className="shop__search">
                        <label className={search__label} htmlFor="filter">Looking for</label>
                        <input onChange={this.onUpdateSearch}
                            id="filter" type="text" placeholder="start typing here..." className={search__input} />
                    </form>
                </Col>
                <Col lg={{ size: '5', offset: 1 }}>
                    <div className={filter}>
                        <div className={filter__label}>
                            Or filter
                        </div>
                        <div className="shop__filter-group">
                            {buttons}
                        </div>
                    </div>
                </Col>
            </Row >
        )
    }
}