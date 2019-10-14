import React, { Component } from "react";
import nextId from "react-id-generator";

import AppHeader from '../app-header';
import SaerchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import ModalExample from '../modal';

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
      { label: 'Going to learn React', important: false, like: false, id: nextId() },
      { label: 'That is so good', important: false, like: false, id: nextId() },
      { label: 'I need a breack...', important: false, like: false, id: nextId() }
    ],
    term: '',
    filter: 'all'
  }
  deleteItem = (id) => {

    this.setState(({ dataFromServer }) => {
      const index = dataFromServer.findIndex(elem => elem.id === id);

      const before = dataFromServer.slice(0, index);
      const after = dataFromServer.slice(index + 1);

      const newArr = [...before, ...after];

      return {
        dataFromServer: newArr
      }
    })
  }

  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: nextId()
    }

    this.setState(({ dataFromServer }) => {
      const newArr = [...dataFromServer, newItem];
      return {
        dataFromServer: newArr
      }
    })
  }

  editItem = (body, id) => {
    this.setState(({ dataFromServer }) => {
      const index = dataFromServer.findIndex(elem => elem.id === id);

      const old = dataFromServer[index];
      const newItem = { ...old, label: body }

      const before = dataFromServer.slice(0, index);
      const after = dataFromServer.slice(index + 1);

      const newArr = [...before, newItem, ...after];

      return {
        dataFromServer: newArr
      }
    })
  }
  onToggleImportant = (id) => {
    this.onToggleEdit(id, 'important')
  }
  onToggleLiked = (id) => {
    this.onToggleEdit(id, 'like')
  }

  onToggleEdit = (id, idea) => {
    this.setState(({ dataFromServer }) => {
      const index = dataFromServer.findIndex(elem => elem.id === id);

      const old = dataFromServer[index];
      let newItem = {};
      if (idea === 'like') newItem = { ...old, like: !old.like }
      if (idea === 'important') newItem = { ...old, important: !old.important }

      const before = dataFromServer.slice(0, index);
      const after = dataFromServer.slice(index + 1);

      const newArr = [...before, newItem, ...after];

      return {
        dataFromServer: newArr
      }
    })
  }

  searchPost = (items, term) => {
    if (term.length === 0) return items
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({ term })
  }

  filterPost = (items, filter) => {
    if (filter === 'like') {
      return items.filter(item => item.like)
    } else {
      return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({ filter })
  }

  render() {
    const { term, filter } = this.state;

    const data = this.state.dataFromServer.filter(item => typeof (item) === 'object');
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return (
      <AppBlock>
        <ModalExample buttonLabel="Жмяк" />
        <AppHeader
          liked={liked}
          allPosts={allPosts}
        />
        <div className="search-panel d-flex">
          <SaerchPanel
            onUpdateSearch={this.onUpdateSearch}
          />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onEdit={this.editItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked} />
        <PostAddForm
          onAdd={this.addItem} />
      </AppBlock >
    )
  }
}
