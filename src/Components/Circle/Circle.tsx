import { CircleContainer } from '@Components/Circle/Circle.styles';
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Rate } from 'antd';

type PropsCircle = {
  danhGia: number;
};

function Circle({ danhGia }: PropsCircle) {
  const percentage = danhGia * 10;

  return (
    <CircleContainer>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={5}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          // rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'round',

          // Text size
          textSize: '14px',

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.8,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `rgba(51, 203, 101, ${percentage / 100})`,
          textColor: '#fff',
          trailColor: '#d6d6d6',
          backgroundColor: '#9370db',
        })}
      />
      <p>Đánh Giá</p>
      <Rate allowHalf value={danhGia / 2} style={{ color: '#78ed78', fontSize: 20 }} />
    </CircleContainer>
  );
}

export default Circle;
