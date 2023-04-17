import React from 'react';
import { useFlyImage } from 'src/Hooks/ChatRoom';
import { ISystemImageItem } from 'src/Types/ChatRoom';
import styled, { keyframes } from 'styled-components';

const ChatRoomImageSectionItem = ({
  item,
  onClick,
}: {
  item: ISystemImageItem;
  onClick: (url: string, onFlyImage: (id: string) => void) => Promise<void>;
}) => {
  const { imageSrc, id } = item;
  const { flyImageStatus, onFlyImage, onResetFlyImageStatus } = useFlyImage();
  const { isFly, originCoor, destinationCoor } = flyImageStatus;

  return (
    <>
      <FlyImage
        isFly={isFly}
        src={imageSrc}
        originCoor={originCoor}
        destinationCoor={destinationCoor}
        onAnimationEnd={onResetFlyImageStatus}
      />

      <Image
        id={`fly_image_${id}`}
        src={imageSrc}
        draggable={false}
        onClick={() => {
          onClick(imageSrc, (targetId: string) => {
            onFlyImage(id, targetId);
          });
        }}
      />
    </>
  );
};
export default ChatRoomImageSectionItem;
interface StyleImageProps {
  src: string;
  isFly?: boolean;
  originCoor?: { x: number; y: number };
  destinationCoor?: { x: number; y: number };
}

const FlyImage = styled.div<{
  isFly: boolean;
  src: string;
  originCoor: { x: number; y: number };
  destinationCoor: { x: number; y: number };
}>`
  position: fixed;
  z-index: 9999;
  visibility: ${({ isFly }) => (isFly ? 'visible' : 'hidden')};
  width: 46px;
  height: 46px;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  border-radius: 12px;

  animation: ${({
      isFly,
      originCoor: { x, y },
      destinationCoor: { x: dx, y: dy },
    }) =>
      isFly &&
      keyframes`
        0%  {
        width: 46px;
        height: 46px;
        transform:${`translate(${x}px,${y}px) rotate(-30deg)`};
      }
        100% {
        opacity: 0.6;
        width: 100px;
        height: 100px;
        transform:${`translate(${dx}px,${dy}px)`};
      } 
`}
    ease-out 0.35s;
  animation-fill-mode: forwards;
`;

const Image = styled.img<StyleImageProps>`
  width: 46px;
  height: 46px;
  border-radius: 12px;
  src: url(${({ src }) => src});
  margin-right: 10px;
  :last-child {
    margin-right: 0px;
  }
`;
