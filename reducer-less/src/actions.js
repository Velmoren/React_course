export const plus = () => ({ type: 'PLUS' });
export const minus = () => ({ type: 'MINUS' });
export const reset = () => ({ type: 'RESET' });

export const download = () => {
    const body = require('./numbers.json');
    const arr = body.numbers.filter(el => el.const);

    return { type: 'DOWNLOAD', func: arr[Math.floor(Math.random() * 3)].const }
};

export const upload = () => {
    return console.log('ddd');

}