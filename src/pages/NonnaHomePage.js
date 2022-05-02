import React from "react";
import NonnaHeaderLanding from "../components/NonnaHeaderLanding";
import NonnaSectionTitle from "../components/NonnaSectionTitle";
import NonnaCategorias from "../components/NonnaCategorias";
import NonnaRecipesSlider from "../components/NonnaRecipesSlider";

export default function NonnaHome() {
  return (
    <>
      <NonnaHeaderLanding />
      <NonnaSectionTitle sectionTitle="Recetas destacadas" />
      <NonnaRecipesSlider />
      <NonnaSectionTitle sectionTitle="Categorías" />
      <NonnaCategorias />
    </>
  );
}
