const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((name) => name.length > 0 && name !== "");

employersNames = employersNames.map((name) => name.toLowerCase());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
const {
    cash,
    eu,
    rus
} = sponsors;

const [firstEu, secondEu, thirdEu] = eu;

function calcCash({
    own = 0,
    cash = []
} = {}) {

    let total = own;

    for (let item of cash) {
        total += +item;
    }

    return total;
}

const money = calcCash({
    cash
});


function makeBusiness({
    owner = 'default',
    cash = 0,
    emp = [],
    director = 'Victor'
} = {}) {

    const sumSponsors = `${eu} ${rus} 'unexpected sponsor'`;
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
And we have a sponsors:
${sumSponsors}
Note. Be careful with ${firstEu}. It's a huge risk.`);
}
makeBusiness({
    owner: 'Sam',
    cash: money,
    emp: employersNames
})