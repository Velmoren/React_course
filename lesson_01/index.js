const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter((name) => name !== "").map((name) => name.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const { cash, eu, rus } = sponsors;

const calcCash = (allCash = []) => {
    return allCash.reduce((a, b) => a + b);
}
const money = calcCash(cash);


const makeBusiness = ({ owner = 'default', cash = 0, emp = [], director = 'Victor' } = {}, ...args) => {

    const [[firstEu]] = args;

    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log(`And we have a sponsors:`);
    console.log(`${eu.join(' ')} ${rus.join(' ')} 'unexpected sponsor'`);
    console.log(`Note. Be careful with ${firstEu}. It's a huge risk.`);
}
makeBusiness({ owner: 'Sam', cash: money, emp: employersNames }, eu);

