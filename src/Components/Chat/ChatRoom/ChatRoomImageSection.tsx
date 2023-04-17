import React from 'react';
import { DUMMY_SYSTEM_IMAGE_DATA } from 'src/DummyData';
import { useChatRoom } from 'src/Hooks/ChatRoom';
import { ISystemImageItem } from 'src/Types/ChatRoom';
import styled, { keyframes } from 'styled-components';
import ChatRoomImageSectionItem from './ChatRoomImageSectionItem';

const ChatRoomImageSection = ({
  isUploadImageSectionOpen,
}: {
  isUploadImageSectionOpen: boolean;
}) => {
  const { onImageSubmit } = useChatRoom();

  return (
    <>
      <Wrapper isOpen={isUploadImageSectionOpen}>
        {DUMMY_SYSTEM_IMAGE_DATA.map((item: ISystemImageItem) => {
          const { id } = item;
          return (
            <ChatRoomImageSectionItem
              key={id}
              item={item}
              onClick={onImageSubmit}
            />
          );
        })}
      </Wrapper>
    </>
  );
};
export default ChatRoomImageSection;
const Wrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 68px;
  padding: 11px 16px;
  overflow-x: scroll;

  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  > img {
    animation: ${({ isOpen }) =>
        isOpen
          ? keyframes`
  0% {
    transform: scale(0.4);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`
          : keyframes`
  0% {
    transform: translateY(0px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-44px);
    opacity: 0;

  }
`}
      ease-out 0.3s;
    animation-fill-mode: backwards;
  }
`;
