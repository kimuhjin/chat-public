import { useAtom, useSetAtom } from 'jotai';
import { useMemo, useRef } from 'react';

import { v4 as uuidV4 } from 'uuid';
import useChatRoomId from './useChatRoomId';
import {
  AbortedPromise,
  postMessageChatApi,
  uploadFileToStorage,
} from 'src/Api/ChatRoomApi';
import { chat_room_image_upload_abort, chat_rooms_atom } from 'src/Store/atoms';
import { IChatRoomItem } from 'src/Types/ChatRoom';

const useChatRoom = () => {
  const roomId = useChatRoomId();
  const inputRef = useRef<HTMLInputElement>(null);
  const uploadingTask = useRef<AbortedPromise<{ success: boolean }> | null>(
    null,
  );

  const [chatRooms, setChatRooms] = useAtom(chat_rooms_atom);
  const setUploadAbort = useSetAtom(chat_room_image_upload_abort);

  const chatRoom: IChatRoomItem | undefined = useMemo(() => {
    return chatRooms.find(data => data.id === roomId);
  }, [chatRooms]);

  const updateChatRoom = (updatedMessageList: IChatRoomItem['messageList']) => {
    const { id } = chatRoom || { id: '' };
    if (!updatedMessageList) return;
    const updatedChatRooms: IChatRoomItem[] = chatRooms.map(chatRoom => {
      if (chatRoom.id === id) {
        return {
          ...chatRoom,
          messageList: updatedMessageList,
        };
      } else {
        return chatRoom;
      }
    });

    setChatRooms(updatedChatRooms);
  };

  const onImageSubmit = async (
    url: string,
    onFlyImage: (id: string) => void,
  ) => {
    if (uploadingTask.current) return;
    const id = uuidV4();
    onFlyImage(id);
    const form = {
      targetId: roomId,
      id,
      isMine: true,
      isUnread: false,
      messageType: 'image',
      message: '사진을 보냈습니다.',
      imageUrl: url,
      messageTime: new Date().toISOString(),
    };

    const onProgress = (percent: number) => {
      const { messageList } = chatRoom || { messageList: [] };
      const newMessageList = [
        ...messageList,
        { ...form, uploadProcess: percent },
      ];
      updateChatRoom(newMessageList);
    };

    const onAbort = () => {
      const { messageList, id } = chatRoom || { messageList: [], id: '' };
      const newMessageList = messageList.filter(li => li.id !== id);
      updateChatRoom(newMessageList);
      uploadingTask.current = null;
    };

    try {
      // For flyImage standby
      onProgress(0);

      const task: AbortedPromise<{ success: boolean }> = uploadFileToStorage(
        onProgress,
        onAbort,
      );
      uploadingTask.current = task;
      setUploadAbort({ abort: task.abort });
      await task.promise;
    } catch (error) {
      console.error('Error:', error);
    } finally {
      uploadingTask.current = null;
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      if (inputRef.current.value === '') return;
      const form = {
        targetId: roomId,
        id: uuidV4(),
        isMine: true,
        isUnread: false,
        messageType: 'text',
        message: inputRef.current.value,
        messageTime: new Date().toISOString(),
      };
      const res = await postMessageChatApi({ chatRooms, form });
      setChatRooms(res);
      inputRef.current.value = '';
    }
  };

  return {
    chatRoom,
    inputRef,
    onImageSubmit,
    onSubmit,
  };
};
export default useChatRoom;
