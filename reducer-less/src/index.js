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

const update = () => {
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);


// asda