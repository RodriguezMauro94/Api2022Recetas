import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NonnaHomePage from './pages/NonnaHomePage';
import NonnaNotFound from './pages/NonnaNotFound';
import NonnaRegisterPage from './pages/NonnaRegisterPage';
import NonnaLoginPage from './pages/NonnaLoginPage';
import NonnaLogoutPage from './pages/NonnaLogoutPage';
import NonnaAboutUsPage from './pages/NonnaAboutUsPage';
import NonnaRecipePage from './pages/NonnaRecipePage';
import NonnaSearchPage from './pages/NonnaSearchPage';
import NonnaNewRecipePage from './pages/NonnaNewRecipePage';
import NonnaEditRecipePage from './pages/NonnaEditRecipePage';
import NonnaForgottenPasswordPage from './pages/NonnaForgottenPasswordPage';
import NonnaMyProfilePage from './pages/NonnaMyProfilePage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route index element={<NonnaHomePage />} />
          <Route path='registro' element={<NonnaRegisterPage />} />
          <Route path='login' element={<NonnaLoginPage />} />
          <Route path='logout' element={<NonnaLogoutPage />} />
          <Route path='sobre-nosotros' element={<NonnaAboutUsPage />} />
          <Route path='receta/:id' element={<NonnaRecipePage />} />
          <Route path='modificar/:id' element={<NonnaEditRecipePage />} />
          <Route path='buscar' element={<NonnaSearchPage />}>
            <Route path=':search' element={<NonnaSearchPage />}>
              <Route path=':order-by' element={<NonnaSearchPage />}>
                <Route path=':filters' element={<NonnaSearchPage />}>
                </Route>
              </Route>
            </Route>
          </Route>
          <Route path='nueva-receta' element={<NonnaNewRecipePage />} />
          <Route path='olvido-de-password' element={<NonnaForgottenPasswordPage />} />
          <Route path='mi-perfil' element={<NonnaMyProfilePage />} />

          <Route path='*' element={<NonnaNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
