import React from 'react';
import { Typography } from 'src/Components/General';
import { IChatRoomItem } from 'src/Types/ChatRoom';
import styled from 'styled-components';

const ChatListItemTextField = ({
  chatTargetName,
  recentMessage,
}: {
  chatTargetName: IChatRoomItem['chatTargetName'];
  recentMessage: string;
}) => {
  return (
    <Wrapper>
      <Typography variant="style_4">{chatTargetName}</Typography>
      <Typography variant="style_5">{recentMessage}</Typography>
    </Wrapper>
  );
};
export default ChatListItemTextField;
const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  padding: 9px 13px 9px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  white-space: pre;
  overflow: hidden;
  & :first-child {
    margin-bottom: 3px;
  }
  > p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
