import tw, { styled } from 'twin.macro';

const Span = styled.span`
  ${tw`text-sm ml-2 hover:text-blue-500 cursor-pointer`}
`;

const Button = styled.button`
  ${tw`block w-full bg-indigo-600 mt-4  rounded-2xl text-white font-semibold mb-2 py-2`}
`;

const Input = styled.input`
  ${tw`pl-2 outline-none border-none `}
`;

const SpanError = styled.span`
  ${tw`text-red-600 `}
`;

const P = styled.p`
  ${tw`text-sm font-normal text-gray-600 mb-7`}
`;

const H1 = styled.h1`
  ${tw`text-gray-800 font-bold text-2xl mb-1`}
`;

const FormControl = styled.div`
  ${tw`flex items-center border-2 py-2 px-3 rounded-2xl mb-3`}
`;

const FormContainer = styled.form`
  ${tw`bg-white`}
`;

export const FormStyle = { Span, Button, Input, SpanError, P, H1, FormControl, FormContainer };
