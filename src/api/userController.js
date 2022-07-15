const api = 'http://localhost:4000/api/';

export function login(user) {
    return fetch(api + 'users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user})
    })
    .then(data => data.json())
}

export function create(user) {
    return fetch(api + 'users/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user})
    })
    .then(data => data.json())
}