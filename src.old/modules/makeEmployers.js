const makeEmployers = () => {
    const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

    return employers.filter((name) => name.length > 0 && name !== "").map((name) => name.toLowerCase().trim());
};

export default makeEmployers;