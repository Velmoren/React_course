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