import React from 'react';
import { textStyleTypes } from 'src/styles/theme';

import styled from 'styled-components';

interface TypographyProps
  extends React.ParamHTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  variant: keyof textStyleTypes;
}

const Typography = ({ children, variant = 'style_1' }: TypographyProps) => {
  return <Text variant={variant}>{children}</Text>;
};
export default Typography;
interface StyledTextProps {
  variant: keyof textStyleTypes;
}
const Text = styled.p<StyledTextProps>`
  ${({ theme, variant }) => theme.textStyles[variant]}
`;
