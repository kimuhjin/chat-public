import { useState } from 'react';

const useUploadImage = (initialState?: boolean) => {
  const [isUploadImageSectionOpen, setIsUploadImageSectionOpen] =
    useState<boolean>(initialState || false);

  const onToggleUploadImageSection = () => {
    setIsUploadImageSectionOpen(prev => !prev);
  };
  return { isUploadImageSectionOpen, onToggleUploadImageSection };
};

export default useUploadImage;
