export default class RestoService {
    _apiBase = `http://localhost:3001`;
    // _apiBase = `https://velmoren.000webhostapp.com/db.json`;
    // https://velmoren.000webhostapp.com

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getBestsellers = async () => {
        let res = await this.getResource(`/bestsellers/`);
        return res;
    }

    getCoffee = async () => {
        let res = await this.getResource(`/coffee/`);
        return res;
    }

    getGoods = async () => {
        let res = await this.getResource(`/goods/`);
        return res;
    }

    getItems = async (type) => {
        let res = await this.getResource(type);
        return res;
    }
}