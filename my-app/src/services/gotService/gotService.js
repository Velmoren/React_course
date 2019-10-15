// import React, {Components} from 'react';
// import styled from 'styled-components';

export default class GotService {
    _apiBase = 'https://www.anapioficeandfire.com/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }
    getRoot(){
        return this.getResource('')
    }
    // ?page=5&pageSize=10  - настройки сортировки
    getAllCharacters(){
        return this.getResource('/characters?page=5&pageSize=1000')
    }

    getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }

    getAllHouses(){
        return this.getResource('/houses?pageSize=1000')
    }

    getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }

    getAllBooks(){
        return this.getResource('/books?pageSize=1000')
    }

    getBook(id) {
        return this.getResource(`/books/${id}`);
    }
}

