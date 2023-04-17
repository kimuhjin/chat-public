import { useEffect } from 'react';

import { useAtomValue } from 'jotai';

import useChatRoomId from './useChatRoomId';
import { chat_rooms_atom } from 'src/Store/atoms';
import { postChatRoomMessageReadApi } from 'src/Api/ChatRoomApi';

const useChatRoomMessageRead = () => {
  const chatRooms = useAtomValue(chat_rooms_atom);
  const roomId = useChatRoomId();

  const onMessageRead = async () => {
    await postChatRoomMessageReadApi({ chatRooms, form: { targetId: roomId } });
  };
  useEffect(() => {
    onMessageRead();
  }, []);
};
export default useChatRoomMessageRead;
