const BASE_URL = 'http://localhost:3030';

export const endpoints = {
    games: `${BASE_URL}/data/games`,
    gamesById: (id) => `${BASE_URL}/data/games/${id}`,
    login: `${BASE_URL}/users/login`,
    register: `${BASE_URL}/users/register`,
    logout: `${BASE_URL}/users/logout`
};

export function request(method, url, data, token) {
    const options = {
        method,
        headers: {}
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    if (token) {
        options.headers['X-Authorization'] = token;
    }

    return fetch(url, options)
        .then(res => {
            if (!res.ok) {
                return res.json().then(err => {
                    throw err;
                })
            }
            if (res.status === 204) {
                return;
            }
            return res.json()
        })

}

