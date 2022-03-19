import { styled } from 'twin.macro';

export const CircleContainer = styled.div`
  width: 150px;
  height: 150px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;
  &:hover {
    transform: scale(1.1);
  }
  p {
    font-size: 16px;
    font-weight: bold;
    color: yellow;
    margin-top: 10px;
  }
`;
