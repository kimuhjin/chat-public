import React from 'react';

import styled from 'styled-components';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement;
  width?: string;
  height?: string;
}
const IconButton = ({
  children,
  width = '24px',
  height = '24px',
  ...otherProps
}: IconButtonProps) => {
  return (
    <Button width={width} height={height} {...otherProps}>
      {children}
    </Button>
  );
};
export default IconButton;
interface StyledIconButtonProps {
  width: string;
  height: string;
}

const Button = styled.button<StyledIconButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  > svg {
    pointer-events: none;
  }
`;
