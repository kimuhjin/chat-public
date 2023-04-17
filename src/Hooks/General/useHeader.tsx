import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChatListHeader, ChatRoomHeader } from 'src/Compositions/Header';

const useHeader = () => {
  const { pathname } = useLocation();
  const route = pathname.split('/').filter(i => i)[0] || pathname;
  const headerSwitch = (route: string) => {
    switch (route) {
      case '/':
      case 'list':
        return <ChatListHeader />;
      case 'room':
        return <ChatRoomHeader />;
      default:
        return null;
    }
  };
  return headerSwitch(route);
};
export default useHeader;
