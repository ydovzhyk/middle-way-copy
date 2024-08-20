import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Navigation from '../Navigation';
import menu from '../../../images/menu.webp';
import close from '../../../images/close.png';
import s from './Navigation.module.scss';

const NavigationPanel = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = setTimeout(() => {
      setIsMenuOpen(false);
    }, 10000);
    const scrollListener = () => {
      if (window.scrollY > 300) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('scroll', scrollListener);
    return () => {
      clearTimeout(closeMenu);
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={s.navigationPanel}>
      {!isMobile && <Navigation />}
      {isMobile && (
        <button className={s.navigationPanel__menu} onClick={openMenu}>
          {!isMenuOpen && (
            <img
              src={menu}
              alt="Menu botton"
              className={s.navigationPanel__menuIcon}
            />
          )}
          {isMenuOpen && (
            <img
              src={close}
              alt="Close menu botton"
              className={s.navigationPanel__menuIcon}
              style={{ width: 25, height: 25 }}
            />
          )}
        </button>
      )}
      {isMenuOpen && isMobile && (
        <div className={s.navigationPanel__menuNavigation}>
          <div className={s.navigationPanel__menuContainer}>
            <Navigation />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationPanel;
