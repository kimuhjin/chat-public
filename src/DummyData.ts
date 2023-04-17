import {
  img_profile_1,
  img_profile_2,
  img_profile_3,
  img_profile_4,
  img_profile_5,
  img_profile_6,
  img_profile_7,
} from './Assets/Images/Profile';
import {
  system_image_1,
  system_image_2,
  system_image_3,
  system_image_4,
  system_image_5,
  system_image_6,
  system_image_7,
} from './Assets/Images/System';

export const DUMMY_CHAT_ROOM_INITIAL_DATA = [
  {
    id: '0',
    chatTargetName: '장만월 사장님',
    profileImageSrc: img_profile_1,
    messageList: [
      {
        id: '1',
        isMine: false,
        isUnread: false,
        messageType: 'text',
        message: '출근했니?',
        messageTime: '2020-05-05T17:34:07.000Z',
      },
      {
        id: '2',
        isMine: false,
        isUnread: true,
        messageType: 'text',
        message: '출근했냐구?',
        messageTime: '2020-05-05T17:35:08.000Z',
      },
      {
        id: '3',
        isMine: false,
        isUnread: true,
        messageType: 'text',
        message: '어딘데 출근 안하니, 죽고싶니?',
        messageTime: '2020-05-06T17:36:09.000Z',
      },
    ],
  },
  {
    id: '1',
    chatTargetName: '신정근 바텐더',
    profileImageSrc: img_profile_2,
    messageList: [
      {
        id: '5',
        isUnread: false,
        isMine: false,
        messageType: 'text',
        message: '오시는 길에 와인 몇병만 사다주세요.',
        messageTime: '2023-04-12T11:22:07.000Z',
      },
    ],
  },
  {
    id: '2',
    chatTargetName: '이미라 의사',
    profileImageSrc: img_profile_3,
    messageList: [
      {
        id: '6',
        isUnread: false,
        isMine: false,
        messageType: 'text',
        message:
          '휴가 잘 보내고 계신가요? 다름이 아니라 지금 급한일이 생겨서 연락드렸어요.',
        messageTime: '2023-04-12T11:22:08.000Z',
      },
    ],
  },
  {
    id: '3',
    chatTargetName: '구찬성 지배인',
    profileImageSrc: img_profile_4,
    messageList: [
      {
        id: '7',
        isUnread: false,
        isMine: false,
        messageType: 'text',
        message: '아 휴가셨군요. 약속은 다음으로 미루시죠!',
        messageTime: '2023-04-12T11:22:09.000Z',
      },
    ],
  },
  {
    id: '4',
    chatTargetName: '노준석 총지배인',
    profileImageSrc: img_profile_5,
    messageList: [
      {
        id: '8',
        isUnread: false,
        isMine: false,
        messageType: 'text',
        message:
          '휴가에서 언제 돌아오시는지요. 돌아오시면 말씀드릴게 있습니다.',
        messageTime: '2023-04-12T11:22:11.000Z',
      },
    ],
  },
  {
    id: '5',
    chatTargetName: '김유나 인턴',
    profileImageSrc: img_profile_6,
    messageList: [
      {
        id: '9',
        isUnread: false,
        isMine: false,
        messageType: 'text',
        message: '304호 키를 잃어버렸어요 어떻게 해야하죠 ㅠ',
        messageTime: '2023-04-12T11:22:12.000Z',
      },
    ],
  },
  {
    id: '6',
    chatTargetName: '구현모',
    profileImageSrc: img_profile_7,
    messageList: [
      {
        id: '10',
        isUnread: false,
        isMine: false,
        messageType: 'text',
        message: '술먹자',
        messageTime: '2023-04-12T11:22:13.000Z',
      },
    ],
  },
];

export const DUMMY_SYSTEM_IMAGE_DATA = [
  { id: '0', imageSrc: system_image_1 },
  { id: '1', imageSrc: system_image_2 },
  { id: '2', imageSrc: system_image_3 },
  { id: '3', imageSrc: system_image_4 },
  { id: '4', imageSrc: system_image_5 },
  { id: '5', imageSrc: system_image_6 },
  { id: '6', imageSrc: system_image_7 },
];
