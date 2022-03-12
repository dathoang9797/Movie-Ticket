import ContactPage from '@Pages/ContactPage';
import HomePage from '@Pages/HomePage';
import NewsPage from '@Pages/NewsPage';
import SignInPage from '@Pages/SignInPage';
import SignUpPage from '@Pages/SignUpPage';
import HomeTemplate from '@Templates/HomeTemplate';
import UserTemplate from '@Templates/UserTemplate';

const routersHomeTemPlate = [
  {
    path: '/',
    componentPage: HomePage,
  },
  {
    path: '/contact',
    componentPage: ContactPage,
  },
  {
    path: '/news',
    componentPage: NewsPage,
  },
];

const routerUserTemplate = [
  {
    path: '/sign-up',
    componentPage: SignUpPage,
  },
  {
    path: '/sign-in',
    componentPage: SignInPage,
  },
];

const renderHomeTemplate = (() =>
  routersHomeTemPlate.map(({ componentPage, path }, index) => (
    <HomeTemplate key={Date.now()} Component={componentPage} path={path} exact />
  )))();

const renderUserTemplate = (() =>
  routerUserTemplate.map(({ componentPage, path }, index) => (
    <UserTemplate key={Date.now()} Component={componentPage} path={path} exact />
  )))();

export const routerTemplate = [...renderHomeTemplate, ...renderUserTemplate];
