import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

const ChatRoomTextField = React.forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<'input'>
>(({ ...otherProps }, ref) => (
  <TextField ref={ref} placeholder="메시지를 입력하세요.." {...otherProps} />
));

ChatRoomTextField.displayName = 'ChatRoomTextField';

export default ChatRoomTextField;
const TextField = styled.input`
  width: 100%;
  height: 50px;
  padding: 16px;
  border-radius: 25px;
  box-shadow: 0 2px 4px 0 ${({ theme }) => theme.colors.black_10};
  background-color: ${({ theme }) => theme.colors.white};
  margin-right: 12px;
  ${({ theme }) => theme.textStyles.style_9};
`;
