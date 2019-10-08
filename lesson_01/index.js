const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

// применяем filter и map
let employersNames = employers.filter((name) => name.length > 0 && name !== "");

employersNames = employersNames.map((name) => name.toLowerCase());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

// деструктурируем обьект
const {
    cash,
    eu,
    rus
} = sponsors;

function calcCash({
    own = 0,
    allCash = []
} = {}, ...args) {

    let total = own;

    for (let item of allCash) {
        total += +item;
    }

    return total;
}

// очень понравился паттерн, применяю на практике ))
const money = calcCash({
    allCash: cash
});


function makeBusiness({
    owner = 'default',
    cash = 0,
    emp = [],
    director = 'Victor'
} = {}, ...args) {

    // решил применить spred оператор тут, так как не могу найти более достойного применения в данном случае))
    // деструктурирую args и забираю только первое его значение
    const [
        [firstEu]
    ] = args;

    // превращаем массивы в строки
    const sumSponsors = `${eu.join(' ')} ${rus.join(' ')} 'unexpected sponsor'`;

    // применяем интерполяцию и его великолепную возможность переносов ))
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
And we have a sponsors:
${sumSponsors}
Note. Be careful with ${firstEu}. It's a huge risk.`);

}
makeBusiness({
    owner: 'Sam',
    cash: money,
    emp: employersNames
}, eu)