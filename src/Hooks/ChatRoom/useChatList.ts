import { useAtomValue } from 'jotai';
import { chat_rooms_atom } from 'src/Store/atoms';

const useChatList = () => {
  const chatRooms = useAtomValue(chat_rooms_atom);
  return { chatRooms };
};
export default useChatList;
