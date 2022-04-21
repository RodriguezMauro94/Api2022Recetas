import React from "react";
import { Link } from "react-router-dom";
import NonnaRecipeResume from "../components/NonnaRecipeResume";

export default function NonnaSearchPage() {
    return (
        <>
            <Link to='/receta' style={{ textDecoration: 'none' }}>
                <NonnaRecipeResume
                    image="pollo_teriyaki"
                    recipeTitle="Pollo teriyaki"
                    recipeDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
                    rating="4"
                    dificulty="Fácil"
                    vegan={true}
                    celiac={true} />
            </Link>

            <Link to='/receta' style={{ textDecoration: 'none' }}>
                <NonnaRecipeResume
                    image="pollo_teriyaki"
                    recipeTitle="Pollo tandori"
                    recipeDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
                    rating="3"
                    dificulty="Difícil"
                    celiac={true} />
            </Link>
        </>
    );
}