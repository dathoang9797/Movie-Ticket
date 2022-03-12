import React, { CSSProperties } from 'react';
import { Carousel } from 'antd';

const contentStyle: CSSProperties = {
  height: '450px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const HomeCarousel = () => {
  return (
    <>
      <Carousel effect='fade'>
        <div>
          <div style={contentStyle}>
            <img src='https://picsum.photos/1000' alt='' className='w-full' />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src='https://picsum.photos/1000' alt='' className='w-full' />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src='https://picsum.photos/1000' alt='' className='w-full' />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src='https://picsum.photos/1000' alt='' className='w-full' />
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
