import React from 'react';
import { Typography } from 'src/Components/General';
import { getReadableDate } from 'src/Utils/getTime';

import styled from 'styled-components';

const ChatListItemTimeStamp = ({
  recentMessageTime,
}: {
  recentMessageTime: string;
}) => {
  return (
    <Wrapper>
      <Typography variant="style_6">
        {getReadableDate(recentMessageTime)}
      </Typography>
    </Wrapper>
  );
};
export default ChatListItemTimeStamp;
const Wrapper = styled.div`
  min-width: 29px;
  display: flex;
  align-items: flex-start;
`;
