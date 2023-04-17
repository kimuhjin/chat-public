import React from 'react';
import { Typography } from 'src/Components/General';
import { IChatRoomItemMessageItem } from 'src/Types/ChatRoom';
import { getReadableTime } from 'src/Utils/getTime';
import styled, { css } from 'styled-components';
import ChatRoomMessage from './ChatRoomMessage';

const ChatRoomMessageItem = ({
  item,
  isMinuteDisplay,
}: {
  item: IChatRoomItemMessageItem;
  isMinuteDisplay: boolean;
}) => {
  const { isMine, messageTime, messageType, uploadProcess } = item || {};
  const isDisplayTime = () => {
    if (isMinuteDisplay) {
      if (messageType === 'text') {
        return true;
      } else if (messageType === 'image') {
        if (uploadProcess === 100) return true;
        else return false;
      } else return false;
    } else {
      return false;
    }
  };
  return (
    <Container isMine={isMine}>
      <Wrapper isMine={isMine}>
        {isDisplayTime() && (
          <Typography variant="style_8">
            {getReadableTime(messageTime)}
          </Typography>
        )}
        <ChatRoomMessage item={item} />
      </Wrapper>
    </Container>
  );
};
export default ChatRoomMessageItem;

const Container = styled.div<{
  isMine: boolean;
}>`
  display: flex;
  justify-content: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
  width: 100%;

  margin-top: ${({ isMine }) => isMine && '10px'};
`;
const Wrapper = styled.div<{
  isMine: boolean;
}>`
  display: flex;
  flex-direction: ${({ isMine }) => (isMine ? 'row' : 'row-reverse')};
  align-items: flex-end;
  width: fit-content;
  max-width: 90%;
  min-height: 41px;
  > * {
    ${({ isMine }) =>
      css`:${isMine ? 'last' : 'first'}-child {
        margin-left:4px;
    }`};
  }
`;
