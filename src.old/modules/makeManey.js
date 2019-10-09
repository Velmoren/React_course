const makeManey = () => {
    const sponsors = {
        cash: [40000, 5000, 30400, 12000],
        eu: ['SRL', 'PLO', 'J&K'],
        rus: ['RusAuto', 'SBO']
    };

    const { cash, eu, rus } = sponsors;

    const calcCash = (allCash = []) => {
        return allCash.reduce((a, b) => a + b);
    }

    return [calcCash(cash), eu, rus];
};

export default makeManey;