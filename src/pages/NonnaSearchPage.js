import React from "react";
import NonnaLink from "../components/NonnaLink";
import NonnaRecipeResume from "../components/NonnaRecipeResume";
import recipes from '../mocks/recipes.json';
import difficulties from '../mocks/difficulties.json';
import NonnaFilterBar from "../components/NonnaFilterBar";
import categories from "../mocks/categories.json"
import { useParams } from "react-router-dom";

export default function NonnaSearchPage() {
    let params = useParams();
    let searchRecipes = filterRecipes(params.search);

    return (
        <>
            <NonnaFilterBar />
            {searchRecipes.map((recipe) => (
                <NonnaLink to={`/receta/${recipe.id}`}>
                    <NonnaRecipeResume
                        image={recipe.urlImage}
                        recipeTitle={recipe.name}
                        recipeDescription={recipe.description}
                        rating={recipe.ratings}
                        difficulty={difficulties.find(difficulty => difficulty.key === recipe.difficulty).value}
                        vegan={recipe.vegan}
                        celiac={recipe.celiac} />
                </NonnaLink>
            ))}
        </>
    );
}

function filterRecipes(search) {
    if(search === undefined) {
        return recipes;
    } else {
        return recipes.filter(
            recipe => recipe.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
    }
    /*
    ||
            recipe.category === 
                categories.find(category => category.description.includes(search)).id
    */
}