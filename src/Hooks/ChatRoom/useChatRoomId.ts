import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { CHAT_ROOM_URL } from 'src/Constants/Urls';

const useChatRoomId = () => {
  const { pathname } = useLocation();
  const roomId = useMemo(
    () => pathname.split(`${CHAT_ROOM_URL}/`).pop() || '',
    [pathname],
  );
  return roomId;
};
export default useChatRoomId;
