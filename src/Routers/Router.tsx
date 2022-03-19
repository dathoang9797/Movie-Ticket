import React, { lazy } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HomeTemplate from '@Templates/HomeTemplate';
import UserTemplate from '@Templates/UserTemplate';
import CheckoutTemplate from '@Templates/CheckoutTemplate';

const CheckoutPage = lazy(() => import('@Pages/CheckoutPage'));
const ContactPage = lazy(() => import('@Pages/ContactPage'));
const DetailPage = lazy(() => import('@Pages/DetailPage'));
const HomePage = lazy(() => import('@Pages/HomePage'));
const NewsPage = lazy(() => import('@Pages/NewsPage'));
const SignInPage = lazy(() => import('@Pages/SignInPage'));
const SignUpPage = lazy(() => import('@Pages/SignUpPage'));
const ProfilePage = lazy(() => import('@Pages/ProfilePage'));
const DashBoardPage = lazy(() => import('@Pages/AdminPage/DashBoardPage'));
const FilmsPage = lazy(() => import('@Pages/AdminPage/FilmsPage'));
const ShowTimePage = lazy(() => import('@Pages/AdminPage/ShowTimePage'));

export const routersHomeTemPlate = [
  { path: process.env.REACT_APP_LINK_HOME, componentPage: HomePage },
  { path: process.env.REACT_APP_LINK_CONTACT, componentPage: ContactPage },
  { path: process.env.REACT_APP_LINK_NEWS, componentPage: NewsPage },
  { path: process.env.REACT_APP_LINK_DETAIL + '/:maPhim', componentPage: DetailPage },
  { path: process.env.REACT_APP_LINK_PROFILE, componentPage: ProfilePage },
];

export const routerUserTemplate = [
  { path: process.env.REACT_APP_LINK_SIGN_IN, componentPage: SignInPage },
  { path: process.env.REACT_APP_LINK_SIGN_UP, componentPage: SignUpPage },
];

export const routerCheckoutTemplate = [
  { path: process.env.REACT_APP_LINK_CHECK_OUT + '/:maLichChieu', componentPage: CheckoutPage },
];

export const routerAdminTemplate = [
  { path: process.env.REACT_APP_LINK_ADMIN_DASHBOARD, componentPage: DashBoardPage },
  { path: process.env.REACT_APP_LINK_ADMIN_FILMS, componentPage: FilmsPage },
  { path: process.env.REACT_APP_LINK_ADMIN_SHOWTIME, componentPage: ShowTimePage },
];

const renderCheckoutTemplate = (() => {
  const idCheckoutTemplate = uuidv4(); //Need Declare same id to switch  in react-router-dom do properly
  return routerCheckoutTemplate.map(({ componentPage, path }) => (
    <CheckoutTemplate key={idCheckoutTemplate} Component={componentPage} path={path} exact />
  ));
})();

const renderHomeTemplate = (() => {
  const idHomeTemplate = uuidv4(); //Need Declare same id to switch  in react-router-dom do properly
  return routersHomeTemPlate.map(({ componentPage, path }) => (
    <HomeTemplate key={idHomeTemplate} Component={componentPage} path={path} exact />
  ));
})();

const renderUserTemplate = (() => {
  const idUserTemplate = uuidv4(); //Need Declare same id to switch  in react-router-dom do properly
  return routerUserTemplate.map(({ componentPage, path }) => (
    <UserTemplate key={idUserTemplate} Component={componentPage} path={path} exact />
  ));
})();

const renderAdminTemplate = (() => {
  const idAdminTemplate = uuidv4(); //Need Declare same id to switch  in react-router-dom do properly
  return routerAdminTemplate.map(({ componentPage, path }) => (
    <UserTemplate key={idAdminTemplate} Component={componentPage} path={path} exact />
  ));
})();

export const routerTemplates = [
  ...renderHomeTemplate,
  ...renderUserTemplate,
  ...renderCheckoutTemplate,
  ...renderAdminTemplate,
];
