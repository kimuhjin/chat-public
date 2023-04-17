import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './Pages/General/Layout';
import { CHAT_LIST_URL, CHAT_ROOM_PARAM_URL, ROOT_URL } from './Constants/Urls';
import ChatList from './Pages/Chat/ChatList';
import ChatRoom from './Pages/Chat/ChatRoom';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROOT_URL} element={<ChatList />} />
        <Route path={CHAT_LIST_URL} element={<ChatList />} />
        <Route path={CHAT_ROOM_PARAM_URL} element={<ChatRoom />} />
      </Route>
    </Routes>
  );
};
export default Router;
