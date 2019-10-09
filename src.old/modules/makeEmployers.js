class MakeEmployers {
    constructor(employers) {
        this.employers = employers;
    }
    filterNames() {
        return this.employers.filter((name) => name !== "").map((name) => name.toLowerCase().trim());
    }
}

export default MakeEmployers;