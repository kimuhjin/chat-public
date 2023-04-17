import React, { ComponentPropsWithoutRef } from 'react';

import { ReactComponent as ChatRoomSendIcon } from '../../../Assets/Icons/chat_room_send.svg';
import styled from 'styled-components';

const ChatRoomSendButton = ({
  ...otherProps
}: ComponentPropsWithoutRef<'button'>) => {
  return (
    <Button {...otherProps}>
      <ChatRoomSendIcon />
    </Button>
  );
};
export default ChatRoomSendButton;
const Button = styled.button`
  width: 50px;
  height: 50px;
  padding: 16px 12px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.purple};
`;
