import { useEffect } from 'react';

const useImagePreload = src => {
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      window.dispatchEvent(new Event('resize'));
    };
  }, [src]);
};

export default useImagePreload;
