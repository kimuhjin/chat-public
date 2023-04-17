import React from 'react';
import { ChatListBody } from 'src/Components/Chat/ChatList';

import styled from 'styled-components';

const ChatList = () => {
  return (
    <Wrapper>
      <ChatListBody />
    </Wrapper>
  );
};
export default ChatList;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
