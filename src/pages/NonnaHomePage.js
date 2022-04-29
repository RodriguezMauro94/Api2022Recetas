import React from "react";
import NonnaHeaderLanding from "../components/NonnaHeaderLanding";
import NonnaSectionTitle from "../components/NonnaSectionTitle";
import NonnaRecetasDestaccadas from "../components/NonnaRecetasDestacadas";

export default function NonnaHome() {
  return (
    <>
      <NonnaHeaderLanding />
      <NonnaSectionTitle sectionTitle="Recetas destacadas" />
      <NonnaRecetasDestaccadas />
      <NonnaSectionTitle sectionTitle="Categorías" />
    </>
  );
}
