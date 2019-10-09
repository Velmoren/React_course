import makeEmployers from './modules/makeEmployers'
import makeManey from './modules/makeManey'

const employersNames = makeEmployers();
const myVar = makeManey();
const money = myVar[0];
const eu = myVar[1];
const rus = myVar[2];

class MakeBusiness {
    constructor({
        owner = 'default',
        cash = 0,
        emp = [],
        director = 'Victor'
    } = {}, ...args) {
        this.owner = owner;
        this.cash = cash;
        this.emp = emp;
        this.director = director;
        this.args = args;
    }
    makeFirstEuNames() {
        return this.args[0][0];
    }
    makeSunSponsors() {
        return `${eu.join(' ')} ${rus.join(' ')} 'unexpected sponsor'`;
    }
    makeLog() {
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers:${this.emp}`);
        console.log(`And we have a sponsors:`);
        console.log(`${this.makeSunSponsors()}`);
        console.log(`Note. Be careful with ${this.makeFirstEuNames()}. It's a huge risk`);
    }

};

const makeBusiness = new MakeBusiness({
    owner: 'Sam',
    cash: money,
    emp: employersNames
}, eu);
makeBusiness.makeLog();