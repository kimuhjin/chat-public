export const ROOT_URL = '/';
export const CHAT_LIST_URL = '/list';
export const CHAT_ROOM_URL = '/room';
export const CHAT_ROOM_PARAM_URL = `${CHAT_ROOM_URL}/:room_id`;
export const getChatRoomUrl = (param: string) => {
  return `${CHAT_ROOM_URL}/${param}`;
};
