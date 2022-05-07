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
import NonnaRecipePage from './pages/NonnaRecipePage';
import NonnaSearchPage from './pages/NonnaSearchPage';
import NonnaNewRecipePage from './pages/NonnaNewRecipePage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route index element={<NonnaHomePage />} />
          <Route path='registro' element={<NonnaRegisterPage />} />
          <Route path='login' element={<NonnaLoginPage />} />
          <Route path='receta/:id' element={<NonnaRecipePage />} />
          <Route path='buscar' element={<NonnaSearchPage />}>
            <Route path=':search' element={<NonnaSearchPage />}>
              <Route path=':order-by' element={<NonnaSearchPage />}>
                <Route path=':filters' element={<NonnaSearchPage />}>
                </Route>
              </Route>
            </Route>
          </Route>
          <Route path='nueva-receta' element={<NonnaNewRecipePage />} />

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
