import React from "react";

import AppHeader from '../app-header';
import SaerchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css'

const App = () => {

  const dataFromServer = [
    {label: 'Going to learn React', important: false, id: 'weee'},
    {label: 'That is so good', important: false, id: 'weer'},
    {label: 'I need a breack...', important: false, id: 'weet'}
  ];

  // фильтруем данные от сервера
  const data = dataFromServer.filter((elem) => typeof(elem) === 'object');

    return (
       <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
              <SaerchPanel/>
              <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
       </div>
    )
}

export default App;