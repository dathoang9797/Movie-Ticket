import React, { Fragment } from 'react';
import ReactLoading from 'react-loading';
import { SpinnerContainer } from './Spinner.styles';

const Spinner = () => {
  return (
    <Fragment>
      <Fragment>
        <SpinnerContainer className='bg-black bg-opacity-30 fixed  h-screen w-screen flex justify-center items-center z-50'>
          <ReactLoading type={'bubbles'} color={'#fff'} height={150} width={150} />
        </SpinnerContainer>
      </Fragment>
    </Fragment>
  );
};

export default Spinner;
