import { createBrowserHistory } from 'history';
import { useEffect } from 'react';
import useAnimation from './useAnimation';
import { useLocation } from 'react-router-dom';
const history = createBrowserHistory();
const useHistoryRoute = () => {
  const { pathname } = useLocation();
  const route = pathname.split('/').filter(i => i)[0];
  const { setRouteDestination } = useAnimation();

  useEffect(() => {
    const historyListen = history.listen(() => {
      if (history.action === 'POP') {
        switch (route) {
          case 'list':
            setRouteDestination('chatList_history');
            return;
          case 'room':
            setRouteDestination('chatRoom_history');
            return;
          default:
            setRouteDestination('');
            return;
        }
      }
    });
    return () => {
      historyListen();
    };
  }, [history, pathname]);
};
export default useHistoryRoute;
