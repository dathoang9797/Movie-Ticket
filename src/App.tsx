import Spinner from '@Components/Spinner';
import { routerTemplates } from '@Routers/Router';
import History from '@Utils/Libs/History';
import React, { Fragment, Suspense } from 'react';
import { Router, Switch } from 'react-router-dom';
import GlobalStyles from './Globalstyle';

function App() {
  return (
    <Fragment>
      <Spinner />
      <GlobalStyles />
      <Suspense fallback={<Fragment></Fragment>}>
        <Router history={History}>
          <Switch>{routerTemplates}</Switch>
        </Router>
      </Suspense>
    </Fragment>
  );
}

export default App;
