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

    async getRoot() {
        const root = await this.getResource('')
        return this._transformRoot(root)
    }

    // ?page=5&pageSize=10  - настройки сортировки
    async getAllCharacters() {
        const res = await this.getResource('/characters?page=5&pageSize=1000')
        return res.map(this._transformCharacter)
    }

    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    async getAllHouses() {
        const res = await this.getResource('/houses?pageSize=1000')
        return res.map(this._transformHouse)
    }

    async getHouse(id) {
        const houses = await this.getResource(`/houses/${id}`);
        return this._transformHouse(houses)
    }

    async getAllBooks() {
        const res = await this.getResource('/books?pageSize=1000')
        return res.map(this._transformBooks)
    }

    async getBook(id) {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBooks(book)
    }

    _transformCharacter(char) {
        for (let elem in char) {
            if (char[elem] === '') char[elem] = 'No information'
        }
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        for (let elem in house) {
            if (house[elem] === '') house[elem] = 'No information'
        }
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBooks(books) {
        for (let elem in books) {
            if (books[elem] === '') books[elem] = 'No information'
        }
        return {
            url: books.url,
            name: books.name,
            isbn: books.isbn,
            authors: books.authors,
            numberOfPages: books.numberOfPages
        }
    }

    _transformRoot(root) {
        for (let elem in root) {
            if (root[elem] === '') root[elem] = 'No information'
        }

        return {
            books: root.books,
            characters: root.characters,
            houses: root.houses
        }
    }

    _transformText(myObj) {
        for (let elem in myObj) {
            if (myObj[elem] === '') myObj[elem] = 'No information'
        }
    }
}

