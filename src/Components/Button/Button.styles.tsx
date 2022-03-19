import tw, { styled } from 'twin.macro';

export const ButtonStyle = styled.button`
  ${tw`px-8 py-3 font-semibold border rounded bg-gray-800 border-gray-800 text-white mr-2 hover:bg-white hover:text-gray-800 transition duration-300`}
  &.active_film {
    ${tw`bg-gray-800 text-white`}
  }
  &.none_active_film {
    ${tw`bg-white text-gray-800`}
  }
`;
