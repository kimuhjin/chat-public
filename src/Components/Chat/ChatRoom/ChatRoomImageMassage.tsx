import React from 'react';
import styled from 'styled-components';

import { useAtomValue } from 'jotai';
import { chat_room_image_upload_abort } from '../../../Store/atoms';
import ChatRoomImageMessageCancelButton from './ChatRoomImageMessageCancelButton';

const ChatRoomImageMassage = ({
  id,
  imageUrl,
  uploadProcess,
}: {
  id: string;
  imageUrl: string;
  uploadProcess: number;
}) => {
  const abortUpload = useAtomValue(chat_room_image_upload_abort);

  return (
    <Container
      isDone={uploadProcess === 100}
      id={`fly_origin_image_${id}`}
      isStandby={uploadProcess === 0}
    >
      <Wrapper isDone={uploadProcess === 100}>
        <Image src={imageUrl} />
        {uploadProcess !== 100 && (
          <ProgressBar>
            <Progress uploadProcess={uploadProcess} />
          </ProgressBar>
        )}
      </Wrapper>
      {uploadProcess !== 100 && (
        <ChatRoomImageMessageCancelButton
          onClick={() => {
            if (abortUpload.abort) {
              abortUpload.abort();
            }
          }}
        />
      )}
    </Container>
  );
};
export default ChatRoomImageMassage;
const Wrapper = styled.div<{ isDone: boolean }>`
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
`;
const Container = styled.div<{ isDone: boolean; isStandby: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;

  width: ${({ isDone }) => (isDone ? `200px` : '100px')};
  height: ${({ isDone }) => (isDone ? `200px` : '100px')};
  opacity: ${({ isStandby }) => (isStandby ? 0 : '1')};
  transition: all 0.3s;
  > * img {
    opacity: ${({ isDone }) => (isDone ? `1` : '0.6')};
  }
`;
const Image = styled.img<{ src: string }>`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  src: url(${({ src }) => src});
`;
const ProgressBar = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 6px;
  margin-top: 6px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.charcoal_grey_3};
  overflow: hidden;
`;
const Progress = styled.div<{ uploadProcess: number }>`
  max-width: inherit;
  width: ${({ uploadProcess }) => `${uploadProcess}%`};
  height: 6px;
  position: absolute;
  left: 0px;
  background-color: ${({ theme }) => theme.colors.purple};
  transition: width linear 0.1s;
`;
