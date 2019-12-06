

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

    getItems = async (type) => {
        let res = await this.getResource(type);
        return res;
    }

    submit = async (url, body) => {
        const res = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, recived ${res.status}`)
        }
        return await res.json()
    }
}


