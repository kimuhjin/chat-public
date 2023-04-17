import { useAtom } from 'jotai';
import { route_destination } from 'src/Store/atoms';

const useAnimation = (route?: string) => {
  const [routeDestination, setRouteDestination] = useAtom(route_destination);

  const isMount = routeDestination === route;

  const animationClassSwitch = (routeDestination: string) => {
    switch (routeDestination) {
      case 'chatList':
        return {
          mount: 'animation-mount-chat-list',
          unmount: 'animation-unmount-chat-list',
        };

      case 'chatRoom':
        return {
          mount: 'animation-mount-chat-room',
          unmount: 'animation-unmount-chat-room',
        };

      case 'chatList_history': {
        return {
          mount: '',
          unmount: 'animation-mount-chat-room',
        };
      }

      case 'chatRoom_history': {
        return {
          mount: '',
          unmount: 'animation-mount-chat-list',
        };
      }

      default:
        return {
          mount: 'animation-container',
          unmount: 'animation-container',
        };
    }
  };

  const animationClassName = isMount
    ? animationClassSwitch(routeDestination).mount
    : animationClassSwitch(routeDestination).unmount;

  return { animationClassName, setRouteDestination };
};
export default useAnimation;
