// const makeEmployers = () => {
//     const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

//     // применяем filter и map
//     let employersNames = employers.filter((name) => name.length > 0 && name !== "");

//     employersNames = employersNames.map((name) => ` ${name.toLowerCase()}`);
//     return employersNames;
// };

// export default makeEmployers;

class MakeEmployers {
    constructor(employers) {
        this.employers = employers;
    }
    filterNames() {
        return this.employers.filter((name) => name.length > 0 && name !== "");
    }
    lowerCaseNames() {
        return this.filterNames().map((name) => ` ${name.toLowerCase()}`);
    }
}

export default MakeEmployers;