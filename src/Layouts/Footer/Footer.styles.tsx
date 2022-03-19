import tw, { styled } from 'twin.macro';

export const FooterContentCopyRightItemLeft = styled.div`
  ${tw`flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6`}
`;

export const FooterContentCopyRightItemRight = styled.div`
  ${tw`flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13`}
`;

export const FooterContentMenuGridBrand = styled.div`
  ${tw`pb-6 col-span-full md:pb-0 md:col-span-6`}
`;

export const FooterContentMenuGridCol = styled.div`
  ${tw`col-span-6 text-center md:text-left md:col-span-3`}
`;

export const FooterContentMenuGrid = styled.div`
  ${tw`grid grid-cols-12`}
`;

export const FooterContentCopyRight = styled.div`
  ${tw`grid justify-center pt-6 lg:justify-between`}
`;

export const FooterContent = styled.div`
  ${tw`container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50`}
`;

export const FooterContainer = styled.footer`
  ${tw`py-6 dark:bg-gray-800 dark:text-gray-50 text-black bg-gray-100`}
`;
