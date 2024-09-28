import { useState } from 'react';

const useModal = (defaultValue = false) => {
  const [isShowingModal, setIsShowingModal] = useState(defaultValue);

  const toggle = (e) => {
    e.stopPropagation();
    setIsShowingModal(!isShowingModal);
  };

  return [isShowingModal, toggle];
};

export default useModal;
