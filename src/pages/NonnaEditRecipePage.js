import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NonnaEditRecipe from "../components/NonnaEditRecipe";
import { getRecipeDetails } from '../api/recipeController';
import { useNavigate } from "react-router-dom";

export default function NonnaEditRecipePage() {
    let navigate = useNavigate();
    const [list, setList] = useState([]);
    let params = useParams();

    useEffect(() => {
        let mounted = true;
        getRecipeDetails(params.id)
            .then(recipes => {
                if (mounted) {
                    if (recipes.data.isMine) {
                        setList(recipes.data.recipe);
                    } else {
                        navigate("../", { replace: true });
                    }
                }
            })
        return () => mounted = false;
    }, []);

    return (
        <>
            {list.map((recipe) => (
                <NonnaEditRecipe recipe={recipe} />
            ))}
        </>
    );
}
