import React from "react";
import NonnaHeaderLanding from "../components/NonnaHeaderLanding";
import NonnaSectionTitle from "../components/NonnaSectionTitle";
import NonnaRecetasDestacadas from "../components/NonnaTopRecipes";

export default function NonnaHome() {
  return (
    <>
      <NonnaHeaderLanding />
      <NonnaSectionTitle sectionTitle="Recetas destacadas" />
      <NonnaRecetasDestacadas />
      <NonnaSectionTitle sectionTitle="Categorías" />
    </>
  );
}
