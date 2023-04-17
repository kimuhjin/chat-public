import React from 'react';
import styled from 'styled-components';

import { useChatRoom } from 'src/Hooks/ChatRoom';
import ChatRoomTextField from './ChatRoomTextField';
import ChatRoomSendButton from './ChatRoomSendButton';

const ChatRoomFooter = () => {
  const { onSubmit, inputRef } = useChatRoom();

  return (
    <Form onSubmit={onSubmit}>
      <ChatRoomTextField ref={inputRef} />
      <ChatRoomSendButton type="submit" />
    </Form>
  );
};

export default ChatRoomFooter;
const Form = styled.form`
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 86px;
  background-color: ${({ theme }) => theme.colors.pale_grey};

  padding: 16px 16px 20px 16px;
`;
