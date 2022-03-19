import { CumRap } from '@Core/Models/Rap.type';
import React from 'react';

type PropsTabCumRap = {
  cumRap: CumRap;
};

function TabListCumRap({ cumRap }: PropsTabCumRap) {
  return (
    <div className='w-80 flex '>
      <img
        src='https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg'
        alt=''
        width='50'
        className='rounded-full '
      />
      <div className='text-left ml-2'>
        {cumRap.tenCumRap}
        <p className='text-red-200'>Chi Tiết</p>
      </div>
    </div>
  );
}

export default TabListCumRap;
