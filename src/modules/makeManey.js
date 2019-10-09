// const makeManey = () => {
//     const sponsors = {
//         cash: [40000, 5000, 30400, 12000],
//         eu: ['SRL', 'PLO', 'J&K'],
//         rus: ['RusAuto', 'SBO']
//     };

//     const {
//         cash,
//         eu,
//         rus
//     } = sponsors;

//     function calcCash({
//         allCash = [],
//         own = 0
//     }) {

//         let total = own;
//         for (let item of allCash) {
//             total += +item;
//         }

//         return total;
//     }

//     const money = calcCash({
//         allCash: cash
//     });


//     return [money, eu, rus];
// };

// export default makeManey;

class MakeManey {
    constructor(cash, eu, rus) {
        this.cash = cash;
        this.eu = eu;
        this.rus = rus;
    }
    makeDestruct() {

    }
    calcCash(allCash, own = 0) {
        let total = own;
        for (let item of allCash) {
            total += +item;
        }
        return total;
    }
    resultMoney() {
        return this.calcCash(this.cash);
    }
    returnResult() {
        return [this.resultMoney(), this.eu, this.rus];
    }
}
export default MakeManey;
// const makeManey = new MakeManey();
// console.log(makeManey.returnResult());