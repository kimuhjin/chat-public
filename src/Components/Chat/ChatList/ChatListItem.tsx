import React, { useMemo } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import { useSetAtom } from 'jotai';
import { IChatRoomItem } from 'src/Types/ChatRoom';
import { route_destination } from 'src/Store/atoms';
import { getChatRoomUrl } from 'src/Constants/Urls';
import ChatListItemTextField from './ChatListItemTextField';
import ChatListItemTimeStamp from './ChatListItemTimeStamp';
import ChatListItemUnread from './ChatListItemUnread';

const ChatListItem = ({ chatRoom }: { chatRoom: IChatRoomItem }) => {
  const { id, chatTargetName, profileImageSrc, messageList } = chatRoom || {};
  const navigate = useNavigate();
  const setRouteDestination = useSetAtom(route_destination);
  const onChatListItemClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id: param } = e.target as HTMLButtonElement;
    setRouteDestination('chatRoom');
    navigate(getChatRoomUrl(param));
  };
  const { message: recentMessage, messageTime: recentMessageTime } = useMemo(
    () => messageList.slice(-1)[0],
    [messageList],
  );

  const unreadMessageAmount = useMemo(
    () => messageList.filter(item => item.isUnread).length,
    [messageList],
  );
  return (
    <Wrapper id={id} onClick={onChatListItemClick}>
      <ProfileImage src={profileImageSrc} />
      <ChatListItemTextField
        chatTargetName={chatTargetName}
        recentMessage={recentMessage}
      />
      <RightSection>
        <ChatListItemTimeStamp recentMessageTime={recentMessageTime} />
        <ChatListItemUnread unreadMessageAmount={unreadMessageAmount} />
      </RightSection>
    </Wrapper>
  );
};
export default ChatListItem;
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: fit-content;
  height: 100%;
  padding: 12px 0px 7px;
`;
const Wrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 74px;
  padding: 9px 16px;
  background-color: ${({ theme }) => theme.colors.white};
  > * {
    pointer-events: none;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  background-image: url(${({ src }) => src});
  width: 56px;
  height: 56px;
  object-fit: cover;
`;
