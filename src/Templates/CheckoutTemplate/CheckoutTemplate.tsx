import { PropsTemplate } from '@Core/Models/Global.type';
import { localService } from '@Services/LocalStorageService/LocalStorageService';
import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router';

const CheckoutTemplate = ({ Component, ...restRoute }: PropsTemplate) => {
  useEffect(() => window.scrollTo(0, 0));

  if (!localService.getUserInfo()) {
    return <Redirect to={process.env.REACT_APP_LINK_HOME} />;
  }

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => (
        <>
          <Component {...propsRoute} />
        </>
      )}
    />
  );
};

export default CheckoutTemplate;
