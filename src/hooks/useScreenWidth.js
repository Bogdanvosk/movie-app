import { useEffect, useState } from 'react';

const useScreenWidth = () => {
  const [screenWidth, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenWidth;
};

export default useScreenWidth;
