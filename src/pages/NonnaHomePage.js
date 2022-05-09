import React from "react";
import NonnaHeaderLanding from "../components/NonnaHeaderLanding";
import NonnaSectionTitle from "../components/NonnaSectionTitle";
import NonnaCategories from "../components/NonnaCategories";
import NonnaRecipesSlider from "../components/NonnaRecipesSlider";
import recipes from '../mocks/recipes.json'

export default function NonnaHome() {
  return (
    <>
      <NonnaHeaderLanding />
      <NonnaSectionTitle sectionTitle="Recetas destacadas" />
      <NonnaRecipesSlider data={getTopRecipes}/>
      <NonnaSectionTitle sectionTitle="Categorías" />
      <NonnaCategories />
    </>
  );
}

function getTopRecipes() {
  return recipes;
}
