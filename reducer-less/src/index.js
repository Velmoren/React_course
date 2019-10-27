import { createStore } from 'redux';
const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'PLUS':
            return +state + 1;
        case 'MINUS':
            return +state - 1;
        case 'RESET':
            return action.value;
        case 'DOWNLOAD':
            return state = action.func
        default:
            return state;
    }
}

const plus = () => ({ type: 'PLUS' });
const minus = () => ({ type: 'MINUS' });
const reset = (value) => ({ type: 'RESET', value });
const download = (func) => ({ type: 'DOWNLOAD', func });

const store = createStore(reducer)

const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
}

const postData = (elem, url) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(elem)
    })
        .catch(error => console.error('Ошибка операции', error));
}

document.getElementById('plus').addEventListener('click', () => {
    store.dispatch(plus())
});

document.getElementById('minus').addEventListener('click', () => {
    store.dispatch(minus())
});

document.getElementById('reset').addEventListener('click', () => {
    const value = 0;
    store.dispatch(reset(value))
});

document.getElementById('download').addEventListener('click', () => {
    getResource('./numbers.json')
        .then((myDb) => {
            store.dispatch(download(myDb.numbers[Math.floor(Math.random() * 3)].const))
        })
});

document.getElementById('upload').addEventListener('click', () => {
    let elem = {};
    elem['saved'] = document.getElementById('counter').textContent;
    postData(elem, 'http://localhost:3001/numbers');
});

const update = () => {
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);