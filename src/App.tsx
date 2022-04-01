import Spinner from '@Components/Spinner';
import { useAppSelector } from '@Redux/hook';
import { selectIsLoadingState } from '@Redux/Selector/LoadingSelect';
import { routerTemplates } from '@Routers/Router';
import History from '@Utils/Libs/History';
import React, { Suspense } from 'react';
import { Router, Switch } from 'react-router-dom';
import GlobalStyles from './Globalstyles';

function App() {
  const isLoading = useAppSelector(selectIsLoadingState);
  return (
    <Suspense fallback={<Spinner />}>
      {isLoading ? <Spinner /> : null}
      <GlobalStyles />
      <Router history={History}>
        <Switch>{routerTemplates}</Switch>
      </Router>
    </Suspense>
  );
}

export default App;
