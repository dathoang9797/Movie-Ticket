import tw, { styled } from 'twin.macro';

export const FormSpan = styled.span`
  ${tw`text-sm ml-2 hover:text-blue-500 cursor-pointer`}
`;

export const FormButton = styled.button`
  ${tw`block w-full bg-indigo-600 mt-4  rounded-2xl text-white font-semibold mb-2 py-2`}
`;

export const FormInput = styled.input`
  ${tw`pl-2 outline-none border-none `}
`;

export const FormSpanError = styled.span`
  ${tw`text-red-600 `}
`;

export const FormP = styled.p`
  ${tw`text-sm font-normal text-gray-600 mb-7`}
`;

export const FormH1 = styled.h1`
  ${tw`text-gray-800 font-bold text-2xl mb-1`}
`;

export const FormControl = styled.div`
  ${tw`flex items-center border-2 py-2 px-3 rounded-2xl mb-3`}
`;

export const FormContainer = styled.form`
  ${tw`bg-white`}
`;
