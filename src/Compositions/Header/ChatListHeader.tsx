import React from 'react';
import styled from 'styled-components';

import { ReactComponent as HamburgerIcon } from '../../Assets/Icons/header_hamburger.svg';
import { ReactComponent as ProfileIcon } from '../../Assets/Icons/header_profile.svg';
import { useAnimation } from 'src/Hooks/General';
import { IconButton, Typography } from 'src/Components/General';

const ChatListHeader = () => {
  const { animationClassName } = useAnimation('chatList');
  return (
    <Wrapper>
      <IconButton>
        <HamburgerIcon />
      </IconButton>
      <TypographyWrapper>
        <div className={animationClassName}>
          <Typography variant={'style_3'}>채팅</Typography>
        </div>
      </TypographyWrapper>
      <div className={animationClassName}>
        <IconButton>
          <ProfileIcon />
        </IconButton>
      </div>
    </Wrapper>
  );
};
export default ChatListHeader;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 8px 12px 10px;
  background-color: ${({ theme }) => theme.colors.purple};
`;
const TypographyWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;
