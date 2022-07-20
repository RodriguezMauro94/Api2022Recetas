import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import NonnaRecipeIngredients from "../components/NonnaRecipeIngredients";
import NonnaSectionSubtitle from "../components/NonnaSectionSubtitle";
import NonnaCreateReview from "../components/NonnaCreateReview";
import NonnaRecipeResume from "../components/NonnaRecipeResume";
import NonnaRecipeStep from "../components/NonnaRecipeStep";
import difficulties from '../data/difficulties.json';
import { getRecipeDetails, deleteRecipe, publishRecipe } from '../api/recipeController';
import { Button, Stack } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function NonnaRecipePage() {
  let navigate = useNavigate();
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

  function handleDeleteRecipe() {
    deleteRecipe(params.id)
      .then(recipes => {
        navigate("../", { replace: true });
      })
  }

  function handlePublishRecipe() {
    publishRecipe(params.id)
      .then(recipes => {
        window.location.reload(false);
      })
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
                {(recipe.status == 'draft') ?
                  <Button color="inherit" variant="outlined" onClick={handlePublishRecipe}>Publicar</Button>
                  :
                  <></>
                }
                <Button color="inherit" variant="contained" onClick={handleDeleteRecipe}>Eliminar receta</Button>
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