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