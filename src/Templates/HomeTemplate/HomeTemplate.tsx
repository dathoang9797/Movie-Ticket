import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { PropsTemplate } from '@Core/Models/Global.type';
import Header from '@Layouts/Header';
import Footer from '@Layouts/Footer';

const HomeTemplate = ({ Component, ...restRoute }: PropsTemplate) => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => (
        <>
          <Header />
          <Component {...propsRoute} />
          <Footer />
        </>
      )}
    />
  );
};

export default HomeTemplate;
