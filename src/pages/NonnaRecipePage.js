import React from "react";
import NonnaRecipeIngredients from "../components/NonnaRecipeIngredients";
import NonnaSectionSubtitle from "../components/NonnaSectionSubtitle";
import NonnaReview from "../components/NonnaReview";
import NonnaCreateReview from "../components/NonnaCreateReview";
import NonnaRecipeResume from "../components/NonnaRecipeResume";

export default function NonnaRecipePage() {
  return (
    <>
      <NonnaRecipeResume
        image="pollo_teriyaki"
        recipeTitle="Pollo teriyaki"
        recipeDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
        rating="4"
        dificulty="Fácil"
        vegan={true}
        celiac={true} />
      <NonnaRecipeIngredients />
      <NonnaSectionSubtitle sectionTitle="Reseñas" />
      <NonnaReview
        reviewUser="Vito Corleone"
        reviewRating="4"
        reviewDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
      />
      <NonnaReview
        reviewUser="Knight of Ni"
        reviewRating="3"
        reviewDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
      />
      <NonnaCreateReview />
    </>
  );
}