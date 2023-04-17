import React, { FC } from 'react';
import { useChatList } from 'src/Hooks/ChatRoom';
import { useAnimation } from 'src/Hooks/General';

import ChatListItem from './ChatListItem';

const ChatListBody: FC = () => {
  const { chatRooms } = useChatList();
  const { animationClassName } = useAnimation('chatList');
  return (
    <div className={`chat-list-animation-container ${animationClassName}`}>
      {chatRooms.map(chatRoom => {
        const { id } = chatRoom;
        return <ChatListItem key={id} chatRoom={chatRoom} />;
      })}
    </div>
  );
};
export default ChatListBody;
