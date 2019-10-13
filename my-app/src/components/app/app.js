import React, { Component } from "react";

import AppHeader from '../app-header';
import SaerchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

// import './app.css'
// import style from './App.module.css'
import styled from 'styled-components';

const AppBlock = styled.div`
      margin: 0 auto;
      max-width: 800px;   
`;

// наследование стилизаций
// const StyledAppBlock = styled(AppBlock)`
//       background-color: grey;
// `;

export default class App extends Component {

  state = {
    dataFromServer: [
      { label: 'Going to learn React', important: false, id: 'weee' },
      { label: 'That is so good', important: false, id: 'weer' },
      { label: 'I need a breack...', important: false, id: 'weet' }
    ]
  }
  filterData = () => {
    return this.state.dataFromServer.filter((elem) => typeof (elem) === 'object');
  }
  deleteItem = (id) => {

    this.setState(({ dataFromServer }) => {
      const index = dataFromServer.findIndex(elem => elem.id === id);

      const before = dataFromServer.slice(0, index);
      const after = dataFromServer.slice(index + 1);
      console.log(before);

      const newArr = [...before, ...after];

      return {
        dataFromServer: newArr
      }
    })
  }

  addItem = (body) => {
    console.log(body);

  }

  editItem = (body, id) => {
    this.setState(({ dataFromServer }) => {
      const newArr = [];
      for (let elem of dataFromServer) {
        if (elem.id === id && body !== '') {
          elem.label = body
        }
        newArr.push(elem);
      }

      return {
        dataFromServer: newArr
      }
    })
  }
  render() {

    return (
      <AppBlock>
        <AppHeader />
        <div className="search-panel d-flex">
          <SaerchPanel />
          <PostStatusFilter />
        </div>
        <PostList
          posts={this.filterData()}
          onDelete={this.deleteItem}
          onEdit={this.editItem} />
        <PostAddForm
          onAdd={this.addItem} />
      </AppBlock >
    )
  }
}
