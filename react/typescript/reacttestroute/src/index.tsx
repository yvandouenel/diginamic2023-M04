import App from './components/App';
import Articles from './components/Articles';
import ArticleDetail from './components/ArticleDetail';
import './styles/scss/index.scss';
import Home from './components/Home';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useParams } from 'react-router-dom';
import loaderArticles from './loaders/articles';
import loaderArticle from './loaders/article';
import { actionAdd } from './actions/articles';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} >
        <Route path="" element={<Home />} />
        <Route path="articles" element={<Articles />} loader={loaderArticles} >
          
        </Route>
        <Route path="articles/:id" element={<ArticleDetail />} loader={loaderArticle} />

      </Route>
      <Route path="/add/article" action={actionAdd} />
    </>
  )
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
