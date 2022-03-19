import TabCumRap from '@Components/Tabs/TabThongTinLichChieu/TabCumRap';
import TabDanhSachPhim from '@Components/Tabs/TabThongTinLichChieu/TabDanhSachPhim/TabDanhSachPhim';
import { TabThongTinLichChieuContainer } from '@Components/Tabs/TabThongTinLichChieu/TabThongTinLichChieu.styles';
import { ThongTinLichChieuHeThongRap } from '@Core/Models/Rap.type';
import { Tabs } from 'antd';
import React from 'react';

type PropsThongTinLichChieuHeThongRap = {
  ThongTinLichChieuHeThongRap: ThongTinLichChieuHeThongRap[];
};

const { TabPane } = Tabs;

function TabThongTinLichChieu({ ThongTinLichChieuHeThongRap }: PropsThongTinLichChieuHeThongRap) {
  return (
    <TabThongTinLichChieuContainer>
      <Tabs tabPosition='left' className='h-full'>
        {ThongTinLichChieuHeThongRap?.map((rap, index) => {
          return (
            <TabPane
              key={index}
              tab={<img src={rap.logo} alt={rap.logo} width='50' className='h-full' />}
            >
              <Tabs tabPosition='left' className='overflow-y-auto h-140'>
                {rap.lstCumRap.map((cumRap, index) => (
                  <TabPane tab={<TabCumRap cumRap={cumRap} />} key={index}>
                    {cumRap.danhSachPhim.map((danhSachPhim, index) => (
                      <TabDanhSachPhim danhSachPhim={danhSachPhim} key={index} cumRap={cumRap} />
                    ))}
                  </TabPane>
                ))}
              </Tabs>
            </TabPane>
          );
        })}
      </Tabs>
    </TabThongTinLichChieuContainer>
  );
}

export default TabThongTinLichChieu;
