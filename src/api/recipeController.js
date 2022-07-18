const api = 'http://localhost:4000/api/recipes/';

export function getTopRecipes() {
    return fetch(api + 'getTopRecipes')
        .then(data => data.json());
}

export function getRecipes(search) {
    var param = search ? '?description=' + search : ""
    return fetch(api + 'getRecipes' + param)
        .then(data => data.json());
}

export function getRecipeDetails(id) {
    let token = window.sessionStorage.getItem("token");
    let tokenIfExists = token? "?token=" + token : "";
    return fetch(api + 'details/' + id + tokenIfExists)
        .then(data => data.json());
}

export function createRecipe(recipe) {
    return fetch(api + 'create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({recipe})
    })
    .then(data => data.json());
}

export function myRecipes() {
    let token = window.sessionStorage.getItem("token");
    return fetch(api + 'myRecipes/' + token)
        .then(data => data.json());
}