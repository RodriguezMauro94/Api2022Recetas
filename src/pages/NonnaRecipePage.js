import React from "react";
import NonnaRecipeIngredients from "../components/NonnaRecipeIngredients";
import NonnaSectionSubtitle from "../components/NonnaSectionSubtitle";
import NonnaReview from "../components/NonnaReview";
import NonnaCreateReview from "../components/NonnaCreateReview";
import NonnaRecipeResume from "../components/NonnaRecipeResume";
import NonnaRecipeStep from "../components/NonnaRecipeStep";

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
      <NonnaSectionSubtitle sectionTitle="Cómo preparar Pollo teriyaki" />
      <NonnaRecipeStep
        stepTitle="Preparar el pollo"
        stepDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
        stepImage="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
      />
      <NonnaRecipeStep
        stepTitle="Cocinar en cacerola"
        stepDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
        stepImage="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
      />
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