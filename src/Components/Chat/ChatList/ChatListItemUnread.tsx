import React from 'react';
import { Typography } from 'src/Components/General';
import styled from 'styled-components';

const ChatListItemUnread = ({
  unreadMessageAmount,
}: {
  unreadMessageAmount: number;
}) => {
  if (!unreadMessageAmount) return null;
  return (
    <Wrapper>
      <Typography variant="style_7">{unreadMessageAmount} </Typography>
    </Wrapper>
  );
};
export default ChatListItemUnread;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  padding: 4px 6px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.purple};
`;
