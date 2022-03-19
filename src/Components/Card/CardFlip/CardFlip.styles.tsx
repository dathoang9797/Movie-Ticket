import { NavLink } from 'react-router-dom';

import tw, { styled } from 'twin.macro';

const CardFlip = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const CardFlipBackDiv2Desc = styled.div`
  div:first-child {
    ${tw`rounded-full cursor-pointer`}
  }
  div:last-child {
    ${tw`text-2xl mt-2 font-bold`}
  }
`;

export const CardFlipBackDiv1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${tw`rounded-lg`}
  img {
    ${tw`h-full w-full object-center overflow-hidden rounded-lg`}
  }
`;

export const CardFlipBackDiv2 = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  ${tw`w-full h-full absolute flex justify-center items-center`};
`;

export const CardFlipBack = styled(CardFlip)`
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
  position: relative;
  background-color: rgba(0, 0, 0, 0.9);
  ${tw`rounded-lg overflow-hidden`}
`;

export const CardFlipFont = styled(CardFlip)`
  background-color: #bbb;
  color: black;
  img {
    ${tw`h-full w-full object-center overflow-hidden rounded-lg`}
  }
`;

export const CardFlipBookTickets = styled(NavLink)`
  ${tw`w-full bg-purple-600 text-white rounded-lg text-center py-2 cursor-pointer hover:bg-white hover:text-purple-600 transition duration-300 hover:shadow-lg  hover:border-purple-600 border-1 border-opacity-0 hover:border-opacity-100 mt-2 block`}
`;

export const CardFlipItem = styled.div`
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${tw`h-full bg-gray-300 bg-opacity-75  rounded-lg overflow-hidden text-center relative shadow-md `}
`;

export const CardFlipContainer = styled.div`
  perspective: 1000px;
  height: 300px;
  &:hover ${CardFlipItem} {
    transform: rotateY(180deg);
    overflow: visible;
  }
`;
