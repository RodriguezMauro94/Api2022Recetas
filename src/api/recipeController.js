const api = 'http://localhost:4000/api/recipes/';

export function getTopRecipes() {
    return fetch(api + 'getTopRecipes')
        .then(data => data.json())
}

export function getRecipes(search) {
    var param = search ? '?description=' + search : ""
    return fetch(api + 'getRecipes' + param)
        .then(data => data.json())
}

export function getRecipeDetails(id) {
    return fetch(api + 'details/' + id)
        .then(data => data.json())
}