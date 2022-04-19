import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NonnaAppBar from './components/NonnaAppBar';
import NonnaSectionTitle from './components/NonnaSectionTitle';
import NonnaHeaderLanding from './components/NonnaHeaderLanding';
import NonnaRecipeResume from './components/NonnaRecipeResume';
import NonnaLogin from './components/NonnaLogin';
import NonnaRegister from './components/NonnaRegister';
import NonnaProfilePicture from './components/NonnaProfilePicture';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <NonnaAppBar />
    <NonnaHeaderLanding />
    <NonnaSectionTitle sectionTitle="Recetas destacadas" />
    <NonnaSectionTitle sectionTitle="Categorías" />
    <NonnaRecipeResume
      image="pollo_teriyaki"
      recipeTitle="Pollo teriyaki"
      recipeDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
      rating="4"
      dificulty="Fácil"
      vegan={true}
      celiac={true} />
    <NonnaRecipeResume
      image="pollo_teriyaki"
      recipeTitle="Pollo tandori"
      recipeDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
      rating="3"
      dificulty="Difícil"
      celiac={true} />
    <NonnaLogin />
    <NonnaRegister />
    <NonnaProfilePicture profilePicture="ni" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
