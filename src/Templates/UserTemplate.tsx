import Footer from '@Layouts/Footer';
import Header from '@Layouts/Header';
import { PropsTemplate } from '@Core/Models/Global.type';
import React, { useEffect } from 'react';
import { Route } from 'react-router';

const UserTemplate = ({ Component, ...restRoute }: PropsTemplate) => {
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

export default UserTemplate;
