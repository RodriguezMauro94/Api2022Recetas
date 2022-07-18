import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import NonnaRecipeIngredients from "../components/NonnaRecipeIngredients";
import NonnaSectionSubtitle from "../components/NonnaSectionSubtitle";
import NonnaCreateReview from "../components/NonnaCreateReview";
import NonnaRecipeResume from "../components/NonnaRecipeResume";
import NonnaRecipeStep from "../components/NonnaRecipeStep";
import difficulties from '../data/difficulties.json';
import { getRecipeDetails } from '../api/recipeController';
import { Button, Stack } from '@mui/material';

export default function NonnaRecipePage() {
  let params = useParams();
  const [list, setList] = useState([]);
  const [isMine, setIsMine] = useState(false);

  useEffect(() => {
    let mounted = true;
    getRecipeDetails(params.id)
      .then(recipes => {
        if (mounted) {
          setList(recipes.data.recipe);
          setIsMine(recipes.data.isMine);
        }
      })
    return () => mounted = false;
  }, []);

  function deleteRecipe() {
      //TODO
  }

  function calculateRating(ratings) {
    let result = 0;
    ratings.forEach(rating => {
      result += rating.rating;
    });

    return result;
  }

  return (
    <>
      {list.map((recipe) => (
        <>
          <NonnaRecipeResume
            image={recipe.urlImage}
            recipeTitle={recipe.name}
            recipeDescription={recipe.description}
            rating={calculateRating(recipe.rating)}
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
          {isMine ?
            <>
              <Stack spacing={2} direction="row">
                <Button color="inherit" variant="outlined">Editar</Button>
                <Button color="inherit" variant="contained" onClick={deleteRecipe}>Eliminar receta</Button>
              </Stack>
            </>
            :
            <>
              <NonnaSectionSubtitle sectionTitle="¿Qué te pareció esta receta?" />
              <NonnaCreateReview />
            </>
          }
        </>
      ))}
    </>
  );
}