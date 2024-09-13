import { useState } from 'react';

const useModal = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);

  const open = () => setIsShowingModal(true);
  const close = () => setIsShowingModal(false);

  return [isShowingModal, open, close];
};

export default useModal;
