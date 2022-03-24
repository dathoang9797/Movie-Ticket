import React from 'react';
import { useMediaQuery } from 'react-responsive';

type PropsUseResponsive = {
  children: JSX.Element;
};

export const DesktopScreen = ({ children }: PropsUseResponsive) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
export const TabletScreen = ({ children }: PropsUseResponsive) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
export const MobileScreen = ({ children }: PropsUseResponsive) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export const DefaultScreen = ({ children }: PropsUseResponsive) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};
