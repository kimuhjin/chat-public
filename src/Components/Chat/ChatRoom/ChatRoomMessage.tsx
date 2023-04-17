import React from 'react';
import { Typography } from 'src/Components/General';

import styled from 'styled-components';
import ChatRoomImageMassage from './ChatRoomImageMassage';
import { IChatRoomItemMessageItem } from 'src/Types/ChatRoom';

const ChatRoomMessage = ({ item }: { item: IChatRoomItemMessageItem }) => {
  const {
    id,
    isMine,
    message,
    imageUrl = '',
    messageType,
    uploadProcess,
  } = item || {};
  if (messageType === 'text')
    return (
      <TextMessageBox isMine={isMine}>
        <Typography variant={isMine ? 'style_1' : 'style_2'}>
          {message}
        </Typography>
      </TextMessageBox>
    );
  else if (messageType === 'image')
    return (
      <ChatRoomImageMassage
        id={id}
        imageUrl={imageUrl}
        uploadProcess={uploadProcess as number}
      />
    );
  else return null;
};
export default ChatRoomMessage;
const TextMessageBox = styled.div<{
  isMine: boolean;
}>`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100%;
  padding: 12px;
  border-radius: 12px;
  box-shadow: ${({ theme, isMine }) =>
    `0 2px 4px 0 ${isMine ? `rgba(91, 56, 177, 0.4)` : theme.colors.black_10}`};
  background-color: ${({ theme, isMine }) =>
    isMine ? theme.colors.purple : theme.colors.white};
  > p {
    text-align: left;
    word-break: break-all;
  }
`;
