import { useState } from 'react';

const useModal = () => {
  const [isShowingModal, setIsShowingModal] = useState(true);

  const toggle = () => setIsShowingModal(!isShowingModal);

  return [isShowingModal, toggle];
};

export default useModal;
