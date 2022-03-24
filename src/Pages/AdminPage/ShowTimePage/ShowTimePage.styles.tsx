import { Form } from 'antd';
import tw, { styled } from 'twin.macro';

export const FormAntStyle: typeof Form = styled(Form)`
  ${tw`w-2/3`}
`;

export const ShowTimeContainer = styled.div`
  ${tw`w-full flex justify-center`}
`;
