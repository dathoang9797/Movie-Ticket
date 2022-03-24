import tw, { styled } from 'twin.macro';
import { ThongTinPhim } from '@Core/Models/Phim.type';
import { CustomCard } from '@tsamantanis/react-glassmorphism';

type PropDetailContainer = {
  filmDetail: ThongTinPhim;
};

type TypeDetailStyle = {
  DetailContainer: typeof DetailContainer;
  DetailItem: typeof DetailItem;
  DetailContent: typeof DetailContent;
  CustomCardStyle: typeof CustomCardStyle;
  DetailGridsColDesc: typeof DetailGridsColDesc;
};

const DetailGridsColDesc = styled.div`
  ${tw`ml-5 text-black w-2/3 pr-40`}
`;

const CustomCardStyle: typeof CustomCard = styled(CustomCard)`
  width: 100%;
  min-height: 100vh;
  padding: 0;
`;

const DetailItem = styled.div`
  ${tw`flex  justify-center items-center  px-8`}

  &:first-child {
    margin-bottom: 10px;
  }
  & .ant-tabs {
    height: 250px;
    overflow-y: auto;
  }
`;

const DetailContent = styled.div`
  ${tw` w-3/4 m-auto   items-center  absolute top-1/2 left-1/2  `}
  transform: translate(-50%,-40%);
`;

const DetailContainer = styled.main<PropDetailContainer>`
  min-height: 100vh;
  background-image: ${(props) => `url(${props.filmDetail.hinhAnh})`};
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const DetailStyle: TypeDetailStyle = {
  DetailContainer,
  DetailItem,
  DetailContent,
  CustomCardStyle,
  DetailGridsColDesc,
};
