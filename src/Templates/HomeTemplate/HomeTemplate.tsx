import React from 'react';
import { Route } from 'react-router-dom';
import { PropsTemplate } from '@Models/Global.type';
import Header from '@Layouts/Header';
import Footer from '@Layouts/Footer';
import HomeCarousel from '@Pages/HomePage/HomeCarousel';

const HomeTemplate = ({ Component, ...restRoute }: PropsTemplate) => {
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

export default HomeTemplate;
