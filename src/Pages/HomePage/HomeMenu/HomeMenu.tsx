import TabThongTinLichChieu from '@Components/Tabs/TabThongTinLichChieu';
import { ThongTinLichChieuHeThongRap } from '@Core/Models/Rap.type';
import { HomeMenuContainer } from '@Pages/HomePage/HomeMenu/HomeMenu.styles';
import React from 'react';

type PropsHomeMenu = {
  ThongTinLichChieuHeThongRap: ThongTinLichChieuHeThongRap[];
};

function HomeMenu({ ThongTinLichChieuHeThongRap }: PropsHomeMenu) {
  return (
    <HomeMenuContainer>
      <TabThongTinLichChieu ThongTinLichChieuHeThongRap={ThongTinLichChieuHeThongRap} />
    </HomeMenuContainer>
  );
}

export default React.memo(HomeMenu);
