import React from 'react';
import styled from 'styled-components';

import { ReactComponent as BackIcon } from 'src/Assets/Icons/header_back.svg';
import { ReactComponent as UploadIcon } from 'src/Assets/Icons/header_upload.svg';
import { ReactComponent as SearchIcon } from 'src/Assets/Icons/header_search.svg';

import { useNavigate } from 'react-router-dom';
import { useAnimation } from 'src/Hooks/General';
import { useChatRoom, useUploadImage } from 'src/Hooks/ChatRoom';
import { CHAT_LIST_URL } from 'src/Constants/Urls';
import { IconButton, Typography } from 'src/Components/General';
import { ChatRoomImageSection } from 'src/Components/Chat/ChatRoom';

const ChatRoomHeader = () => {
  const { animationClassName, setRouteDestination } = useAnimation('chatRoom');
  const { chatRoom } = useChatRoom();
  const { chatTargetName } = chatRoom || {};
  const { isUploadImageSectionOpen, onToggleUploadImageSection } =
    useUploadImage(false);
  const navigate = useNavigate();

  const onGoBack = () => {
    setRouteDestination('chatList');
    navigate(CHAT_LIST_URL);
  };

  return (
    <Container isOpen={isUploadImageSectionOpen}>
      <Wrapper>
        <LeftSection>
          {!isUploadImageSectionOpen && (
            <IconButton onClick={onGoBack}>
              <BackIcon />
            </IconButton>
          )}
        </LeftSection>
        <TypographyWrapper>
          <div className={animationClassName}>
            <Typography variant={'style_3'}>{chatTargetName}</Typography>
          </div>
        </TypographyWrapper>
        <div className={animationClassName}>
          <RightSection>
            <IconButton onClick={onToggleUploadImageSection}>
              <UploadIcon />
            </IconButton>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </RightSection>
        </div>
      </Wrapper>
      <ChatRoomImageSection
        isUploadImageSectionOpen={isUploadImageSectionOpen}
      />
    </Container>
  );
};

export default ChatRoomHeader;

const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '112px' : '44px')};
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.colors.purple};
  transition: height 0.3s;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 44px;
  padding: 8px 12px 10px;
`;
const TypographyWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

const LeftSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65px;
`;

const RightSection = styled(LeftSection)``;
