import tw, { styled } from 'twin.macro';

export const CardTagH1 = styled.h1`
  ${tw`text-lg text-center uppercase`}
`;

export const CardTagP = styled.p`
  ${tw`leading-relaxed mb-3`}
`;

export const CardTagA = styled.a`
  ${tw`text-indigo-500 inline-flex items-center w-full`}
`;

export const CardButton = styled.button`
  ${tw`w-full bg-red-600 text-white rounded-lg text-center py-2 cursor-pointer hover:bg-white hover:text-red-600 transition duration-300 hover:shadow-lg  hover:border-red-600 border-1 border-opacity-0 hover:border-opacity-10 `}
`;

export const CardItem = styled.div`
  ${tw`h-full bg-gray-300 bg-opacity-75 px-2 pt-4 pb-4 rounded-lg overflow-hidden text-center relative shadow-md`}
`;

export const CardContainer = styled.div`
  ${tw`mx-3 my-3`}
`;
