class MakeManey {
    constructor(cash, eu, rus) {
        this.cash = cash;
        this.eu = eu;
        this.rus = rus;
    }
    calcCash(allCash) {
        return allCash.reduce((a, b) => a + b);
    }
    returnResult() {
        return [this.calcCash(this.cash), this.eu, this.rus];
    }
}

export default MakeManey;