import { atom } from 'jotai';
import { DUMMY_CHAT_ROOM_INITIAL_DATA } from 'src/DummyData';

export interface UploadState {
  abort: (() => void) | null;
}

export const chat_rooms_atom = atom(DUMMY_CHAT_ROOM_INITIAL_DATA);

export const chat_room_image_upload_abort = atom<UploadState>({
  abort: null,
});

export const route_destination = atom('');
