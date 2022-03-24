// src/styles/GlobalStyles.js
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
 

button, [type='button'], [type='reset'], [type='submit'],button.ant-switch-small, [type='button'].ant-switch-small, [type='reset'].ant-switch-small, [type='submit'].ant-switch-small {
  background-color: rgba(0, 0, 0, 0.25);
}

button.ant-switch-checked, [type='button'].ant-switch-checked, [type='reset'].ant-switch-checked, [type='submit'].ant-switch-checked {
  background-color: #1890ff;
}




`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
