class Api {
    base_url = '/api'

    request(url, params) {
        return fetch(url, params)
    }

    protected_request(url, params, token) {
        if (params.hasOwnProperty("headers")) {
            params['headers']['authorization'] = "Bearer " + token
        }
        return this.request(url, params)
    }

    get_excursions() {
        return this.request("/excursions")
    }

    get_excursion(excursion_id) {
        return this.request("/excursion/" + excursion_id)
    }
}

export const api = new Api()