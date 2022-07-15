import React, { useEffect, useState } from 'react';
import NonnaLink from "../components/NonnaLink";
import NonnaRecipeResume from "../components/NonnaRecipeResume";
import difficulties from '../data/difficulties.json';
import NonnaFilterBar from "../components/NonnaFilterBar";
import categories from "../data/categories.json"
import { useParams } from "react-router-dom";
import { getRecipes } from '../api/recipeController';

export default function NonnaSearchPage() {
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

    return (
        <>
            <NonnaFilterBar />
            {list.data.map((recipe) => (
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
