import React, {Component} from 'react';
import {Container} from 'reactstrap';
import nextId from "react-id-generator";
import myDb from './db.json';


import BestsellersOutput from '../bestsellersOutput'
import CoffeeOutput from '../coffeeOutput'
import GoodsOutput from '../goodsOutput'

export default class App extends Component {
  giveMeId = (arr) => {
    arr.map((item) =>  item['id'] = nextId())
    return arr
  }

  render() {
    const {bestsellers, coffee, goods} = myDb;
    
    const bestsellersId = this.giveMeId(bestsellers)
    const coffeeId = this.giveMeId(coffee)
    const goodsId = this.giveMeId(goods)
    
    return (
      <>
        <Container>
            <BestsellersOutput cards={bestsellersId}/>
            <CoffeeOutput cards={coffeeId}/>
            <GoodsOutput cards={goodsId}/>
        </Container> 
      </>
    )
  }
}
