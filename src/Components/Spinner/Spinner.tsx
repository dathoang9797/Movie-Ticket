import React, { Fragment } from 'react';
import ReactLoading from 'react-loading';
import { SpinnerContainer } from './Spinner.styles';
import { useAppSelector } from '@Redux/hook';
import { selectorLoadingState } from '@Redux/Reducers/LoadingReducer/LoadingSeclection';

const Spinner = () => {
  const { isLoading } = useAppSelector(selectorLoadingState);

  return (
    <Fragment>
      {isLoading ? (
        <Fragment>
          <SpinnerContainer className='bg-black bg-opacity-30 fixed  h-screen w-screen flex justify-center items-center'>
            <ReactLoading type={'bubbles'} color={'#fff'} height={150} width={150} />
          </SpinnerContainer>
        </Fragment>
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default Spinner;
