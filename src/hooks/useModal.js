import { useState } from 'react';

const useModal = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);

  const toggle = () => setIsShowingModal(!isShowingModal);

  return [isShowingModal, toggle];
};

export default useModal;
