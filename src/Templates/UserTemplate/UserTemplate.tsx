import React from 'react';
import { Route } from 'react-router';
import { PropsTemplate } from '@Models/Global.type';
import Header from '@Layouts/Header';
import Footer from '@Layouts/Footer';
import HomeCarousel from '@Pages/HomePage/HomeCarousel';

const UserTemplate = (props: PropsTemplate) => {
  const { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => (
        <>
          <Header />
          <HomeCarousel />
          <Component {...propsRoute} />
          <Footer />
        </>
      )}
    />
  );
};

export default UserTemplate;
