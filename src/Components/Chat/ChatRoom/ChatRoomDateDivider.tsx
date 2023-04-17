import React from 'react';
import { Typography } from 'src/Components/General';
import { IChatRoomItemMessageItem } from 'src/Types/ChatRoom';
import { getReadableFullDate } from 'src/Utils/getTime';

import styled from 'styled-components';

const ChatRoomDateDivider = ({
  messageTime,
}: Pick<IChatRoomItemMessageItem, 'messageTime'>) => {
  return (
    <Container>
      <Divider />
      <Wrapper>
        <Typography variant="style_8">
          {getReadableFullDate(messageTime)}
        </Typography>
      </Wrapper>
    </Container>
  );
};
export default ChatRoomDateDivider;
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 15px;
  margin-bottom: 10px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.pale_lilac};
`;
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0px 10px;
  background-color: ${({ theme }) => theme.colors.pale_grey};
`;
