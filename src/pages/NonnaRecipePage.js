import React from "react";
import { useParams } from "react-router-dom";
import NonnaRecipeIngredients from "../components/NonnaRecipeIngredients";
import NonnaSectionSubtitle from "../components/NonnaSectionSubtitle";
import NonnaCreateReview from "../components/NonnaCreateReview";
import NonnaRecipeResume from "../components/NonnaRecipeResume";
import NonnaRecipeStep from "../components/NonnaRecipeStep";
import recipes from '../mocks/recipes.json';
import difficulties from '../mocks/difficulties.json';

export default function NonnaRecipePage() {
  let params = useParams();
  let recipe = recipes.find(recipe => recipe.id === params.id);

  return (
    <>
      <NonnaRecipeResume
        image={recipe.urlImage}
        recipeTitle={recipe.name}
        recipeDescription={recipe.description}
        rating={recipe.ratings}
        difficulty={difficulties.find(difficulty => difficulty.key === recipe.difficulty).value}
        vegan={recipe.vegan}
        celiac={recipe.celiac} />
      <NonnaRecipeIngredients id={recipe.id} />
      <NonnaSectionSubtitle sectionTitle={`Cómo preparar ${recipe.name}`} />
      {recipe.steps.map((step) => (
        <NonnaRecipeStep
          stepTitle={step.title}
          stepDescription={step.description}
          stepImage={step.urlImage}
        />
      ))}
      <NonnaSectionSubtitle sectionTitle="¿Qué te pareció esta receta?" />
      <NonnaCreateReview />
    </>
  );
}