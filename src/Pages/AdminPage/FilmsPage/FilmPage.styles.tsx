import tw, { styled } from 'twin.macro';
import { Input } from 'antd';

const { Search } = Input;

export const SearchStyle = styled(Search)`
  .ant-input-group-addon {
    ${tw`bg-blue-600`}
  }
`;
