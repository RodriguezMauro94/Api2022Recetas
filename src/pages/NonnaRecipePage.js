import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import NonnaRecipeIngredients from "../components/NonnaRecipeIngredients";
import NonnaSectionSubtitle from "../components/NonnaSectionSubtitle";
import NonnaCreateReview from "../components/NonnaCreateReview";
import NonnaRecipeResume from "../components/NonnaRecipeResume";
import NonnaRecipeStep from "../components/NonnaRecipeStep";
import difficulties from '../data/difficulties.json';
import { getRecipeDetails } from '../api/recipeController';

export default function NonnaRecipePage() {
  let params = useParams();
  const [list, setList] = useState({
    data: []
  });

  useEffect(() => {
    let mounted = true;
    getRecipeDetails(params.id)
      .then(recipes => {
        if (mounted) {
          setList(recipes)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <>
      {list.data.map((recipe) => (
        <>
          <NonnaRecipeResume
            image={recipe.urlImage}
            recipeTitle={recipe.name}
            recipeDescription={recipe.description}
            rating={recipe.ratings}
            difficulty={difficulties.find(difficulty => difficulty.key === recipe.difficulty).value}
            vegan={recipe.vegan}
            celiac={recipe.celiac} />
          <NonnaRecipeIngredients ingredients={recipe.ingredients} />
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
      ))}
    </>
  );
}