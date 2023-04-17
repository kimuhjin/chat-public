import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as CancelIcon } from 'src/Assets/Icons/chat_room_cancel.svg';
const ChatRoomImageMessageCancelButton = ({
  ...otherProps
}: ComponentPropsWithoutRef<'button'>) => {
  return (
    <Button {...otherProps}>
      <CancelIcon />
    </Button>
  );
};
export default ChatRoomImageMessageCancelButton;
const Button = styled.button`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  opacity: 0.8;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.black};
  > svg {
    pointer-events: none;
  }
`;
