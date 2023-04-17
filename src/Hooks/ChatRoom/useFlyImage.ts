import { useState } from 'react';

const flyImageStatusDefault = {
  isFly: false,
  originCoor: { x: 0, y: 0 },
  destinationCoor: { x: 0, y: 0 },
};

const useFlyImage = () => {
  const [flyImageStatus, setFlyImageStatus] = useState(flyImageStatusDefault);
  const onResetFlyImageStatus = () => {
    setFlyImageStatus(flyImageStatusDefault);
  };
  const onFlyImage = (id: string, targetId: string) => {
    const interval = setInterval(() => {
      const flyImageEl = document.getElementById(`fly_image_${id}`);
      const chatBodyEl = document.getElementById(
        `fly_origin_image_${targetId}`,
      );

      if (flyImageEl && chatBodyEl) {
        const { x, y } = flyImageEl.getBoundingClientRect();
        const { x: dx, y: dy } = chatBodyEl.getBoundingClientRect();
        setFlyImageStatus({
          isFly: true,
          originCoor: { x, y },
          destinationCoor: {
            x: dx - 16,
            y: dy - 28,
          },
        });
      }

      if (flyImageEl && chatBodyEl) {
        clearInterval(interval);
      }
    }, 100);
  };

  return { flyImageStatus, onFlyImage, onResetFlyImageStatus };
};
export default useFlyImage;
