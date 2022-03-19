import FormSignIn from '@Pages/SignInPage/FormSignIn';
import { SignInContainer, SignInContainerForm, SignInDesc } from '@Pages/SignInPage/SignIn.styles';
import React from 'react';

function SignInPage() {
  return (
    <SignInContainer>
      <SignInDesc>
        <div>
          <h1>GoFinance</h1>
          <p className=''>The most popular peer to peer lending at SEA</p>
          <button type='submit'>Read More</button>
        </div>
      </SignInDesc>
      <SignInContainerForm>
        <FormSignIn />
      </SignInContainerForm>
    </SignInContainer>
  );
}

export default SignInPage;
