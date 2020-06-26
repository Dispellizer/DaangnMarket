import React from 'react';
import './App.css';
import './reset.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ArticlesPage from './pages/ArticlesPage';
import HotArticlesPage from './pages/HotArticlesPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      <Route component={SearchPage} path="/search/:id" />
      <Route component={ArticlesPage} path="/articles" />
      <Route component={HotArticlesPage} path="/hot_articles" />
      <Route component={UsersPage} path="/users/:userId" />
    </>
  );
}

export default App;
