let wrap = document.getElementById('wrap');

// для проверки img/img_2.jpg поменять на img/img_3.jpg
let images = [
    'img/img_1.jpg',
    'img/img_2.jpg',
    'img/img_3.jpg'
]

const loadImage = (path) => {
    return new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = `./${path}`;
        img.onload = () => {
            resolve(img);
        }
        img.onerror = () => {
            reject(path)
        }
    });
};

Promise.all(images.map(loadImage))
    .then(result => {
        for (let img of result) {
            wrap.appendChild(img);
        }

    })
    .catch(result => console.error(`this image not found ${result}`));