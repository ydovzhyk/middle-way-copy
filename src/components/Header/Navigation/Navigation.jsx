import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { NavLink, useLocation } from 'react-router-dom';
import { getLogin } from '../../../redux/auth/auth-selectors';
import NavigationCamp from '../NavigationCamp';
import s from './Navigation.module.scss';

const Navigation = () => {
  const location = useLocation();
  const [locationPath, setLocationPath] = useState('/');
  const [isCampPath, setIsCampPath] = useState(false);
  const isLogin = useSelector(getLogin);
  const isDesctop = useMediaQuery({ minWidth: 1280 });

  const getClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  useEffect(() => {
    const currentPathname = location.pathname;
    setLocationPath(currentPathname);
    if (currentPathname.includes('/camp')) {
      setIsCampPath(true);
    } else {
      setIsCampPath(false);
    }
  }, [location.pathname]);

  return (
    <div style={{ width: '100%' }}>
      <div className="container">
        <nav className={s.navigation}>
          {isLogin && (
            <NavLink
              className={getClassName({
                isActive: locationPath === '/home',
              })}
              to="/home"
              title="Перейти до Головної сторінки"
            >
              <span className={s.navigation__text}>Головна</span>
            </NavLink>
          )}
          <NavLink
            className={getClassName({
              isActive: locationPath === '/',
            })}
            to="/"
            title="Перейти до сторінки Школа"
          >
            <span className={s.navigation__text}>Школа</span>
          </NavLink>
          <NavLink
            className={getClassName({
              isActive: locationPath === '/kindergaten',
            })}
            to="/kindergaten"
            title="Перейти до сторінки Дитячий садок"
          >
            <span className={s.navigation__text}>
              {isDesctop ? 'Дитячий садок' : 'Садок'}
            </span>
          </NavLink>
          <NavLink
            className={getClassName({
              isActive: locationPath === '/camp',
            })}
            to="/camp"
            title="Перейти до сторінки Дитчий табір"
          >
            <span className={s.navigation__text}>Табори</span>
          </NavLink>
          <NavLink
            className={getClassName({
              isActive: locationPath === '/prices',
            })}
            to="/prices"
            title="Перейти до сторінки Вартість навчання"
          >
            <span className={s.navigation__text}>
              {isDesctop ? 'Вартість навчання' : 'Ціни'}
            </span>
          </NavLink>
          {/* <NavLink
            className={getClassName({
              isActive: locationPath === '/about',
            })}
            to="/about"
            title="Перейти до сторінки Про нас"
          >
            <span className={s.navigation__text}>Про нас</span>
          </NavLink> */}
          <NavLink
            className={getClassName({
              isActive: locationPath === '/contacts',
            })}
            to="/contacts"
            title="Перейти до сторінки Контакти"
          >
            <span className={s.navigation__text}>Контакти</span>
          </NavLink>
          {isLogin && (
            <NavLink
              className={getClassName({
                isActive:
                  locationPath === '/admin/events' ||
                  locationPath === '/admin/prices' ||
                  locationPath === '/admin/appointments' ||
                  locationPath === '/admin/reviews',
              })}
              to="/admin/appointments"
              title="Перейти до Адмінстративної сторінки"
            >
              <span className={s.navigation__text}>
                {isDesctop ? 'Адмін частина' : 'Адмін'}
              </span>
            </NavLink>
          )}
        </nav>
      </div>
      {isCampPath && <NavigationCamp />}
    </div>
  );
};

export default Navigation;
