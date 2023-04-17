export interface IChatRoomItemMessageItem {
  id: string;
  isMine: boolean;
  isUnread: boolean;
  message: string;
  messageType: string;
  messageTime: string;
  imageUrl?: string;
  uploadProcess?: number;
}

export interface IChatRoomItem {
  id: string;
  chatTargetName: string;
  profileImageSrc: string;
  messageList: IChatRoomItemMessageItem[];
}

export interface ISystemImageItem {
  id: string;
  imageSrc: string;
}
