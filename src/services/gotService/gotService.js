// import React, {Components} from 'react';
// import styled from 'styled-components';

export default class GotService {
    _apiBase = 'https://www.anapioficeandfire.com/api';
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getRoot = async () => {
        const root = await this.getResource('')
        return this._transformRoot(root)
    }

    // ?page=5&pageSize=10  - настройки сортировки
    getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=5&pageSize=10')

        return res.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouses = async () => {
        const res = await this.getResource('/houses?page=6&pageSize=10')
        return res.map(this._transformHouse)
    }

    getHouse = async (id) => {
        const houses = await this.getResource(`/houses/${id}`);
        return this._transformHouse(houses)
    }

    getAllBooks = async () => {
        const res = await this.getResource('/books')
        return res.map(this._transformBooks)
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBooks(book)
    }

    _transformCharacter = (char) => {
        for (let elem in char) {
            if (char[elem] === '') char[elem] = 'No information'
        }
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
            id: char.url.replace(/\D/g, '')
        }
    }

    _transformHouse = (house) => {
        for (let elem in house) {
            if (house[elem] === '') house[elem] = 'No information'
        }
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons,
            id: house.url.replace(/\D/g, '')
        }
    }

    _transformBooks = (books) => {
        for (let elem in books) {
            if (books[elem] === '') books[elem] = 'No information'
        }

        return {
            name: books.name,
            isbn: books.isbn,
            authors: books.authors,
            numberOfPages: books.numberOfPages,
            id: books.url.replace(/\D/g, '')
        }
    }

    _transformRoot = (root) => {
        for (let elem in root) {
            if (root[elem] === '') root[elem] = 'No information'
        }

        return {
            books: root.books,
            characters: root.characters,
            houses: root.houses
        }
    }

    _transformText = (myObj) => {
        for (let elem in myObj) {
            if (myObj[elem] === '') myObj[elem] = 'No information'
        }
    }
}

