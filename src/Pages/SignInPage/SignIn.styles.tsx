import tw, { styled } from 'twin.macro';

export const SignInContainerForm = styled.div`
  ${tw`flex w-1/2 justify-center items-center bg-white`}
`;

export const SignInDesc = styled.div`
  ${tw`flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700  justify-around items-center`}
  div {
    h1 {
      ${tw`text-white font-bold text-4xl font-sans`}
    }

    p {
      ${tw`text-white mt-1`}
    }

    button {
      ${tw`block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2`}
    }
  }
`;

export const SignInContainer = styled.div`
  ${tw`h-screen flex`}
`;
