import React, { lazy } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import HomeTemplate from '@Templates/HomeTemplate';
import UserTemplate from '@Templates/UserTemplate';
import CheckoutTemplate from '@Templates/CheckoutTemplate';
import AdminTemplate from '@Templates/AdminTemplate';
import UserManagerPage from '@Pages/AdminPage/UserManagerPage';

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
const AddFilmsPage = lazy(() => import('@Pages/AdminPage/FilmsPage/AddFilmsPage'));
const EditFilmsPage = lazy(() => import('@Pages/AdminPage/FilmsPage/EditFilmsPage'));
const UserManagerFilmsPage = lazy(() => import('@Pages/AdminPage/UserManagerPage'));

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
  { path: process.env.REACT_APP_LINK_ADMIN_SHOWTIME_FILMS, componentPage: ShowTimePage },
  { path: process.env.REACT_APP_LINK_ADMIN_ADD_FILMS, componentPage: AddFilmsPage },
  { path: process.env.REACT_APP_LINK_ADMIN_EDIT_USERMANAGER, componentPage: UserManagerFilmsPage },
  { path: process.env.REACT_APP_LINK_ADMIN_EDIT_FILMS + '/:maPhim', componentPage: EditFilmsPage },
];

const renderCheckoutTemplate = (() => {
  //Need Declare same id to switch  in react-router-dom do properly
  const idCheckoutTemplate = `CheckoutTemplate-${nanoid()}`;
  return routerCheckoutTemplate.map(({ componentPage, path }) => (
    <CheckoutTemplate key={idCheckoutTemplate} Component={componentPage} path={path} exact />
  ));
})();

const renderHomeTemplate = (() => {
  const idHomeTemplate = `HomeTemplate-${nanoid()}`;
  return routersHomeTemPlate.map(({ componentPage, path }) => (
    <HomeTemplate key={idHomeTemplate} Component={componentPage} path={path} exact />
  ));
})();

const renderUserTemplate = (() => {
  const idUserTemplate = `UserTemplate-${nanoid()}`;
  return routerUserTemplate.map(({ componentPage, path }) => (
    <UserTemplate key={idUserTemplate} Component={componentPage} path={path} exact />
  ));
})();

const renderAdminTemplate = (() => {
  const idAdminTemplate = `AdminTemplate-${nanoid()}`;
  return routerAdminTemplate.map(({ componentPage, path }) => (
    <AdminTemplate key={idAdminTemplate} Component={componentPage} path={path} exact />
  ));
})();

export const routerTemplates = [
  ...renderHomeTemplate,
  ...renderUserTemplate,
  ...renderCheckoutTemplate,
  ...renderAdminTemplate,
];
