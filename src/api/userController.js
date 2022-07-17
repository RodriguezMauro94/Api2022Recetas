const api = 'http://localhost:4000/api/users/';

export function login(user) {
    return fetch(api + 'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user})
    })
    .then(data => data.json())
}

export function create(user) {
    return fetch(api + 'registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user})
    })
    .then(data => data.json())
}

export function getUserProfile(token) {
    return fetch(api + 'myProfile/' + token)
        .then(data => data.json())
}