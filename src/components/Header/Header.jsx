import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { getLoginPanel } from '../../redux/auth/auth-selectors';
import Logo from 'components/Shared/Logo';
import AboutPanel from './AboutPanel/AboutPanel';
import AuthPanel from './AuthPanel/AuthPanel';
import SotialNetwork from './SotialNetwork';
import NavigationPanel from './NavigationPanel';
import NavigationAdmin from './NavigationAdmin';

import s from './Header.module.scss';

const Header = () => {
  const isLoginPanel = useSelector(getLoginPanel);
  const [isAdminPage, setIsAdminPage] = useState(false);
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const location = window.location.pathname;

  useEffect(() => {
    const checkAdminPage = () => {
      if (location.startsWith('/admin')) {
        setIsAdminPage(true);
      } else {
        setIsAdminPage(false);
      }
    };
    checkAdminPage();
  }, [location]);

  return (
    <header id="header" className={s.header}>
      <div className="container">
        <div className={s.header__content}>
          <Logo
            width={isDesctop ? 308 : isTablet ? 263 : 185}
            height={isDesctop ? 94 : isTablet ? 80 : 56}
          />
          {!isMobile && <AboutPanel />}
        </div>
      </div>
      {isMobile && (
        <div className={s.header__sotialPanel}>
          <SotialNetwork />
        </div>
      )}
      <NavigationPanel />
      {isAdminPage && <NavigationAdmin />}
      {isLoginPanel && <AuthPanel />}
    </header>
  );
};

export default Header;
