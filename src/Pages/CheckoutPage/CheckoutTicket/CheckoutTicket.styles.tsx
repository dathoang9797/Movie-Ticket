import tw, { styled } from 'twin.macro';
import { CheckOutlined } from '@ant-design/icons';

export const CheckoutTicketIconCheckOutlined = styled(CheckOutlined)`
  font-weight: bold;
  line-height: 35px;
  vertical-align: 0;
`;
export const CheckoutTicketContentTable = styled.div`
  ${tw`mt-5 flex justify-center`}
  table {
    ${tw`divide-y divide-gray-200  w-2/3`}
  }
  thead,
  tbody {
    ${tw`bg-gray-300 p-5`}
  }
  td {
    ${tw`text-center`}
  }
`;

export const CheckoutTicketContentScreen = styled.div`
  ${tw`flex flex-col items-center mt-5`}
  h3 {
    ${tw`mt-3 text-black`}
  }
`;

export const CheckoutTicketCartGhe = styled.span`
  ${tw`text-green-500 pr-2 text-xl`}
`;

export const CheckoutTicketButtonDatVe = styled.button`
  ${tw`bg-green-500 text-white w-full text-center py-3 font-bold text-2xl`}
`;

export const CheckoutTicketCartListGheDangDat = styled.div`
  ${tw`w-4/5`}
  span {
    ${tw`text-red-400 text-lg`}
  }
`;

export const CheckoutTicketContentDatVe = styled.div`
  ${tw`mb-0`}
`;

export const CheckoutTicketCartContentGhe = styled.div`
  ${tw`flex flex-row my-5`}
`;

export const CheckoutTicketCartTotalPrice = styled.div`
  ${tw`text-right col-span-1`}
  span {
    ${tw`text-green-800 text-lg`}
  }
`;

export const CheckoutTicketCart = styled.div`
  ${tw`flex flex-col w-full p-3 space-y-4 divide-y  sm:p-8 divide-gray-700 dark:bg-gray-900 dark:text-gray-100`}
  h2 {
    ${tw`text-2xl font-semibold text-green-500 text-center`}
  }
  h3 {
    ${tw`text-2xl`}
  }
`;

export const CheckoutGridColSpan3 = styled.div`
  ${tw`col-span-3`}
`;

export const CheckoutGridColSpan9 = styled.div`
  ${tw`col-span-9`}
`;

export const CheckoutTicketGrid = styled.div`
  ${tw`grid grid-cols-12`}
`;

export const CheckoutTicketContainer = styled.div`
  padding-right: 0px !important;
  padding-left: 0px !important;
  ${tw`container pt-20 min-h-full  m-auto`}
`;
