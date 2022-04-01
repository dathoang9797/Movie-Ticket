import tw, { styled } from 'twin.macro';

const FooterContentCopyRightItemLeft = styled.div`
  ${tw`flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6`}
`;

const FooterContentCopyRightItemRight = styled.div`
  ${tw`flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13`}
`;

const FooterContentMenuGridBrand = styled.div`
  ${tw`pb-6 col-span-full md:pb-0 md:col-span-6`}
`;

const FooterContentMenuGridCol = styled.div`
  ${tw`col-span-6 text-center md:text-left md:col-span-3`}
`;

const FooterContentMenuGrid = styled.div`
  ${tw`grid grid-cols-12`}
`;

const FooterContentCopyRight = styled.div`
  ${tw`grid justify-center pt-6 lg:justify-between`}
`;

const FooterContent = styled.div`
  ${tw`container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50`}
`;

const FooterContainer = styled.footer`
  ${tw`py-6 dark:bg-gray-800 dark:text-gray-50 text-black bg-gray-100`}
`;

export const FooterStyle = {
  FooterContent,
  FooterContainer,
  FooterContentCopyRight,
  FooterContentCopyRightItemLeft,
  FooterContentCopyRightItemRight,
  FooterContentMenuGrid,
  FooterContentMenuGridBrand,
  FooterContentMenuGridCol,
};
