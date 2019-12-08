import React, { Component } from 'react';
import BlockDescription from '../../../blocks/blockDescription';
import BlockSearchAndFilter from '../../../blocks/blockSearchAndFilter';
import BlockItem from '../../../blocks/blockItem';
import firebase from '../../../../services/firebase';

import Spinner from '../../../spinner';
import { withRouter, Link } from 'react-router-dom';

// files
import girl__img from '../../../../media/img/coffee_girl.jpg';

// style
import { Container, Row, Col } from 'reactstrap';
import classes from './SectionShop.module.css';
import classesCommon from '../../../app/App.module.css';

const { shop, wrapper, card } = classes;
const { line } = classesCommon;

class SectionShop extends Component {
  state = {
    items: null,
    loading: true,
    error: false,
    char: '',
    filter: 'all'
  }

  componentDidMount() {
    setTimeout(() => {
      firebase
        .database()
        .ref()
        .child('coffee')
        .once('value')
        .then(snapshot => {
          if (snapshot.val()) {
            this.setState({ items: snapshot.val() })
          } else {
            this.setState({ error: true })
          }
        })
        .then(() => this.setState({ loading: false }))
    }, 400);
  }

  onUpdateSearch = (char) => {
    this.setState({ char })
  }

  onUpdateFilter = (filter) => {
    this.setState({ filter })
  }

  filterPost(items, filter) {

    if (filter === 'all') {
      return items
    }
    else {
      return items.filter((item) => item.country === filter)
    }
  }

  searchPost(items, char) {
    if (char.length === 0) {
      return items
    }

    return items.filter((item) => {
      const itemNameTransform = item.name.toLowerCase();
      const charTransform = char.toLowerCase();
      return itemNameTransform.indexOf(charTransform) > -1
    })
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

    const { items, loading, char, filter } = this.state;
    const visiblePosts = this.filterPost(this.searchPost(items, char), filter);

    const content = loading ? <Spinner /> : this.renderItems(visiblePosts)

    return (
      <section className={shop} >
        <Container>
          <BlockDescription image={girl__img} />
          <div className={line}></div>
          <BlockSearchAndFilter
            onUpdateSearch={this.onUpdateSearch}
            filter={filter}
            onUpdateFilter={this.onUpdateFilter}
          />
          <Row>
            <Col lg={{ size: '10', offset: 1 }} >
              <div className={wrapper}>
                {content}
              </div>
            </Col>
          </Row>
        </Container >
      </section>
    )
  }
}

export default withRouter(SectionShop)