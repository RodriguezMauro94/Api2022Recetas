import React, { useEffect, useState } from 'react';
import NonnaLink from "../components/NonnaLink";
import NonnaRecipeResume from "../components/NonnaRecipeResume";
import difficulties from '../data/difficulties.json';
import NonnaFilterBar from "../components/NonnaFilterBar";
import categories from "../data/categories.json"
import { useParams } from "react-router-dom";
import { getRecipes } from '../api/recipeController';

export default function NonnaSearchPage() {
    //TODO agregar ordenado y filtrado
    let params = useParams();
    const [list, setList] = useState({
        data: []
    });

    useEffect(() => {
        let mounted = true;
        getRecipes(params.search)
            .then(items => {
                if (mounted) {
                    setList(items)
                }
            })
        return () => mounted = false;
    }, [])

    function calculateRating(ratings) {
        let result = 0;
        ratings.forEach(rating => {
            result += rating.rating;
        });

        return result;
    }

    return (
        <>
            <NonnaFilterBar />
            {list.data.map((recipe) => (
                <NonnaLink to={`/receta/${recipe._id}`}>
                    <NonnaRecipeResume
                        image={recipe.urlImage}
                        recipeTitle={recipe.name}
                        recipeDescription={recipe.description}
                        rating={calculateRating(recipe.rating)}
                        difficulty={difficulties.find(difficulty => difficulty.key === recipe.difficulty).value}
                        vegan={recipe.vegan}
                        celiac={recipe.celiac} />
                </NonnaLink>
            ))}
        </>
    );
}
