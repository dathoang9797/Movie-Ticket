import logo from '@Assets/images/Logo.png';
import { NavLink } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

const HeaderButtonBurger = styled.button`
  ${tw`p-4 lg:hidden`}
`;

const HeaderLink = styled(NavLink)`
  ${tw`flex items-center px-4 -mb-1 border-b-2   border-white text-white`}
`;

const HeaderLi = styled.li`
  ${tw`flex `}
`;

const HeaderUl = styled.ul`
  ${tw`items-stretch hidden space-x-3 lg:flex`}
`;

const HeaderSignIn = styled(NavLink)`
  ${tw`self-center px-8 py-3 rounded`}
`;

const HeaderSignUp = styled(NavLink)`
  ${tw`self-center px-8 py-3 font-semibold rounded `}
`;

const HeaderContentSign = styled.div`
  ${tw`items-center flex-shrink-0 hidden lg:flex`}
`;

const HeaderContainer = styled.div`
  ${tw`container flex justify-between h-16 mx-auto`}
`;

const HeaderBackGround = styled.header`
  ${tw`p-4 bg-gray-800 dark:text-gray-100  bg-opacity-40 text-white fixed w-full z-10`}
`;

const HeaderBrandImg = styled.img.attrs(() => ({
  src: logo,
  alt: 'cyberlearn.vn',
}))`
  ${tw`h-full`};
`;

export const HeaderStyle = {
  HeaderSignIn,
  HeaderBackGround,
  HeaderContainer,
  HeaderButtonBurger,
  HeaderLink,
  HeaderLi,
  HeaderUl,
  HeaderSignUp,
  HeaderContentSign,
  HeaderBrandImg,
};
