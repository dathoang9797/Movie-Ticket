import TabCumRap from '@Components/Tabs/TabThongTinLichChieu/TabCumRap';
import TabDanhSachPhim from '@Components/Tabs/TabThongTinLichChieu/TabDanhSachPhim/TabDanhSachPhim';
import { TabThongTinLichChieuContainer } from '@Components/Tabs/TabThongTinLichChieu/TabThongTinLichChieu.styles';
import { ThongTinLichChieuHeThongRap } from '@Core/Models/Rap.type';
import { nanoid } from '@reduxjs/toolkit';
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
        {ThongTinLichChieuHeThongRap?.map((rap) => {
          return (
            <TabPane
              key={`Rap-${rap.idHeThongRapChieu}-${rap.maHeThongRap}`}
              tab={<img src={rap.logo} alt={rap.logo} width='50' className='h-full' />}
            >
              <Tabs tabPosition='left' className='overflow-y-auto h-140'>
                {rap.lstCumRap.map((cumRap) => (
                  <TabPane tab={<TabCumRap cumRap={cumRap} />} key={`CumRap-${cumRap.idCumRap}`}>
                    {cumRap.danhSachPhim.map((danhSachPhim) => (
                      <TabDanhSachPhim
                        danhSachPhim={danhSachPhim}
                        key={`DanhSachPhim-${danhSachPhim.idDanhSachPhim}`}
                        cumRap={cumRap}
                      />
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
