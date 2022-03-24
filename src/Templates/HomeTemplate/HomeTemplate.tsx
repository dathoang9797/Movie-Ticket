import { PropsTemplate } from '@Core/Models/Global.type';
import Footer from '@Layouts/Footer';
import Header from '@Layouts/Header';
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

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
