import TabCumRapChieu from '@Components/Tabs/TabHeThongRapChieu/TabCumRapChieu';
import { HeThongRapChieu } from '@Core/Models/Rap.type';
import { Tabs } from 'antd';
import React from 'react';

type PropsHeThongRapChieu = {
  ThongTinLichChieuHeThongRap?: never;
  heThongRapChieu: HeThongRapChieu[];
};
const { TabPane } = Tabs;

function TabHeThongRapChieu({ heThongRapChieu }: PropsHeThongRapChieu) {
  return (
    <div className='bg-white  w-full  container py-5 px-5'>
      <Tabs defaultActiveKey='1' centered>
        <TabPane tab='Lịch chiếu' key='1'>
          <div>
            <Tabs tabPosition='left'>
              {heThongRapChieu?.map((htr, index) => {
                return (
                  <TabPane
                    key={index}
                    tab={
                      <div>
                        <img
                          src={htr.logo}
                          alt={htr.logo}
                          width={50}
                          height={50}
                          className='rounded-full'
                        />
                        {htr.tenHeThongRap}
                      </div>
                    }
                  >
                    {htr.cumRapChieu.map((cumRapChieu, index) => (
                      <TabCumRapChieu cumRapChieu={cumRapChieu} key={index} />
                    ))}
                  </TabPane>
                );
              })}
            </Tabs>
          </div>
        </TabPane>

        <TabPane tab='Thông tin' key='2'>
          Thông Tin
        </TabPane>
        <TabPane tab='Đánh giá' key='3'>
          Đánh giá
        </TabPane>
      </Tabs>
    </div>
  );
}

export default TabHeThongRapChieu;
