import { ArrowStyle } from '@Components/ArrowSlick/ArrowSlick.styles';
import React from 'react';
import { CustomArrowProps } from 'react-slick';

function ArrowSlick({ className, onClick, style }: CustomArrowProps) {
  return <ArrowStyle className={className} style={{ ...style }} onClick={onClick}></ArrowStyle>;
}

export default ArrowSlick;
