const api = 'http://localhost:4000/api/recipes/';

export function getTopRecipes() {
    return fetch(api + 'getTopRecipes')
        .then(data => data.json())
}