import { useEffect, useRef } from 'react';
import { IChatRoomItem } from 'src/Types/ChatRoom';

const useChatRoomAutoScroll = (
  messageList: IChatRoomItem['messageList'] | undefined,
) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const onAutoScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  };

  const lastImageUploadProcess = messageList
    ?.filter(message => message.messageType === 'image')
    .reverse()[0]?.uploadProcess;

  useEffect(() => {
    if (lastImageUploadProcess === 100) {
      setTimeout(() => {
        onAutoScroll(scrollRef);
      }, 300);
    }
  }, [lastImageUploadProcess]);
  useEffect(() => {
    onAutoScroll(scrollRef);
  }, [messageList]);
  return { scrollRef, onAutoScroll };
};
export default useChatRoomAutoScroll;
