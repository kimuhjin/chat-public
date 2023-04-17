import React from 'react';
import { ChatRoomBody, ChatRoomFooter } from 'src/Components/Chat/ChatRoom';
import { useChatRoomMessageRead } from 'src/Hooks/ChatRoom';

import { useAnimation } from 'src/Hooks/General';

import styled from 'styled-components';

const ChatRoom = () => {
  useChatRoomMessageRead();
  const { animationClassName } = useAnimation('chatRoom');
  return (
    <Container>
      <div className={animationClassName}>
        <Wrapper>
          <ChatRoomBody />
        </Wrapper>
        <ChatRoomFooter />
      </div>
    </Container>
  );
};
export default ChatRoom;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.pale_grey};
`;
