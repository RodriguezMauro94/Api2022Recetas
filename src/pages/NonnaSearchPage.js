import React from "react";
import NonnaLink from "../components/NonnaLink";
import NonnaRecipeResume from "../components/NonnaRecipeResume";
import recipes from '../mocks/recipes.json';
import difficulties from '../mocks/difficulties.json';
import NonnaFilterBar from "../components/NonnaFilterBar";

export default function NonnaSearchPage() {
    return (
        <>
            <NonnaFilterBar />
            {recipes.map((recipe) => (
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