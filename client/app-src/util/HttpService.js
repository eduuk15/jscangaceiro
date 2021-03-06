export class HttpService {

    _handleErrors(res) {

        if (!res.ok) throw new Error(res.statutsText);

        return res;
    }

    get(url) {

        return fetch(url)
            .then(res => this._handleErrors(res))
            .then(res => res.json());
    }
}