import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HeaderContext = createContext();

export const useHeaderHeight = () => useContext(HeaderContext);

export const HeaderProvider = ({ children, value }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (document.getElementById('header')) {
        const height = document.getElementById('header').clientHeight;
        setHeaderHeight(height);
      }
    };

    // Додаємо затримку за допомогою setTimeout
    const timeout = setTimeout(() => {
      updateHeaderHeight();
    }, 300);

    //Визначаємо висоту Heder при переході в різні режими екрану
    const observer = new ResizeObserver(() => updateHeaderHeight());
    const headerElement = document.getElementById('header');
    if (headerElement) {
      observer.observe(headerElement);
    }

    if (value) {
      updateHeaderHeight();
    }

    window.addEventListener('load', updateHeaderHeight);
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('load', updateHeaderHeight);
      window.removeEventListener('resize', updateHeaderHeight);
      clearTimeout(timeout);
    };
  }, [value, location]);

  return (
    <HeaderContext.Provider value={headerHeight}>
      {children}
    </HeaderContext.Provider>
  );
};
