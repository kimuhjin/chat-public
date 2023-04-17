import { IChatRoomItem } from '../Types/ChatRoom';
interface IPostApiForm {
  targetId: string;
  id: string;
  isMine: boolean;
  isUnread: boolean;
  messageType: string;
  message: string;
  messageTime: string;
}
export interface AbortedPromise<T> {
  promise: Promise<T>;
  abort: () => void;
}

const updateChatRoomMessageList = (
  chatRooms: IChatRoomItem[],
  form: IPostApiForm,
  delay: number,
): Promise<IChatRoomItem[]> => {
  const { targetId, ...restForm } = form;
  const chatRoom = chatRooms.find(data => data.id === targetId);
  const { messageList, id } = chatRoom || {};

  if (!messageList || !chatRoom) {
    return Promise.reject(new Error(`ChatRoom or MessageList not found.`));
  }

  const newMessageList = [...messageList, restForm];
  const updatedChatRoom: IChatRoomItem[] = chatRooms.map(chatRoom => {
    if (chatRoom.id === id) {
      return {
        ...chatRoom,
        messageList: newMessageList,
      };
    } else {
      return chatRoom;
    }
  });

  return new Promise<IChatRoomItem[]>(resolve => {
    setTimeout(() => {
      resolve(updatedChatRoom);
    }, delay);
  });
};

const updateChatRoomRead = (
  chatRooms: IChatRoomItem[],
  form: Pick<IPostApiForm, 'targetId'>,
  delay: number,
): Promise<IChatRoomItem[]> => {
  const { targetId } = form;

  const chatRoom = chatRooms.find(data => data.id === targetId);
  const { messageList, id } = chatRoom || {};

  if (!messageList || !chatRoom) {
    return Promise.reject(new Error(`ChatRoom or MessageList not found.`));
  }

  const newMessageList = messageList.map(message => {
    message.isUnread = false;
    return message;
  });
  const updatedChatRoom: IChatRoomItem[] = chatRooms.map(chatRoom => {
    if (chatRoom.id === id) {
      return {
        ...chatRoom,
        messageList: newMessageList,
      };
    } else {
      return chatRoom;
    }
  });

  return new Promise<IChatRoomItem[]>(resolve => {
    setTimeout(() => {
      resolve(updatedChatRoom);
    }, delay);
  });
};

export const uploadFileToStorage = (
  onProgress: (percent: number) => void,
  onAbort?: () => void,
): AbortedPromise<{ success: boolean }> => {
  const controller = new AbortController();
  let intervalId: NodeJS.Timeout | null = null;

  const promise: Promise<{ success: boolean }> = new Promise(resolve => {
    let percent = 0;
    intervalId = setInterval(() => {
      percent += Math.floor(Math.random() * 10) + 10;
      if (percent > 100) percent = 100;
      onProgress(percent);
      if (percent === 100) {
        if (intervalId) {
          clearInterval(intervalId);
        }
        resolve({
          success: true,
        });
      }
    }, 350);
  });

  const abort = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    controller.abort();
    if (onAbort) {
      onAbort();
    }
  };

  return { promise, abort };
};

export const postMessageChatApi = ({
  chatRooms,
  form,
}: {
  chatRooms: IChatRoomItem[];
  form: IPostApiForm;
}) => {
  return updateChatRoomMessageList(chatRooms, form, 100);
};

export const postChatRoomMessageReadApi = ({
  chatRooms,
  form,
}: {
  chatRooms: IChatRoomItem[];
  form: Pick<IPostApiForm, 'targetId'>;
}) => {
  return updateChatRoomRead(chatRooms, form, 100);
};
