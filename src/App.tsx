import Header from '@Layouts/Header';
import ContactPage from '@Pages/ContactPage';
import HomePage from '@Pages/HomePage';
import NewsPage from '@Pages/NewsPage';
import { routerTemplate } from '@Routers/Router';
import HomeTemplate from '@Templates/HomeTemplate/HomeTemplate';
import History from '@Utils/Libs/History';
import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router history={History}>{routerTemplate}</Router>
    </>
  );
};

export default App;
