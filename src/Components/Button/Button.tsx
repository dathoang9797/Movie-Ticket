import React from 'react';
import { ButtonStyle } from '@Components/Button/Button.styles';

type PropsButton = Pick<
  React.ComponentProps<'button'>,
  'children' | 'type' | 'onClick' | 'className'
>;

function Button({ children, onClick, type, className }: PropsButton) {
  console.log('button');

  return (
    <ButtonStyle onClick={onClick} className={className}>
      {children}
    </ButtonStyle>
  );
}

export default React.memo(Button);
