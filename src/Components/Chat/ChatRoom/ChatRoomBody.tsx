import React, { useMemo } from 'react';
import styled from 'styled-components';

import { useChatRoom, useChatRoomAutoScroll } from 'src/Hooks/ChatRoom';
import { IChatRoomItemMessageItem } from 'src/Types/ChatRoom';
import { getIsNewDate, isSameFullDateAndMinute } from 'src/Utils/getTime';
import ChatRoomDateDivider from './ChatRoomDateDivider';
import ChatRoomMessageItem from './ChatRoomMessageItem';
const ChatRoomBody = () => {
  const { chatRoom } = useChatRoom();
  const { messageList } = chatRoom || {};
  const { scrollRef } = useChatRoomAutoScroll(messageList);

  const chatItems = useMemo(() => {
    if (!messageList) {
      return null;
    }
    return messageList.map((item: IChatRoomItemMessageItem, index: number) => {
      const { messageTime } = item || {};
      const isNewDate = getIsNewDate(
        messageList[index - 1]?.messageTime,
        messageList[index]?.messageTime,
      );
      const isMinuteDisplay = !isSameFullDateAndMinute(
        messageList[index]?.messageTime,
        messageList[index + 1]?.messageTime,
      );

      return (
        <div key={messageTime}>
          {isNewDate && <ChatRoomDateDivider messageTime={messageTime} />}
          <ChatRoomMessageItem item={item} isMinuteDisplay={isMinuteDisplay} />
        </div>
      );
    });
  }, [messageList]);

  return <Wrapper ref={scrollRef}>{chatItems}</Wrapper>;
};
export default ChatRoomBody;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px 16px 110px 16px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  > * {
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;
