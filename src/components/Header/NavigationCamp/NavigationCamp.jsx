import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import s from './NavigationCamp.module.scss';

const NavigationCamp = () => {
  const location = useLocation();
  const [locationPath, setLocationPath] = useState('/');

  const getClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  useEffect(() => {
    const currentPathname = location.pathname;
    setLocationPath(currentPathname);
  }, [location.pathname]);

  return (
    <nav style={{ borderTop: '1px solid #f2f2f2' }}>
      <div className="container">
        <div className={s.navigationCamp}>
          <NavLink
            className={getClassName({
              isActive:
                locationPath === '/camp/school' || locationPath === '/camp',
            })}
            to="/camp/school"
            title="Перейти до шкільного табору"
          >
            <span className={s.navigationCamp__text}>Шкільний табір</span>
          </NavLink>
          <NavLink
            className={getClassName({
              isActive: locationPath === '/camp/kosiv',
            })}
            to="/camp/kosiv"
            title="Перейти до табору Косів"
          >
            <span className={s.navigationCamp__text}>
              Табір в Карпатах (2024)
            </span>
          </NavLink>
          {/* <NavLink
            className={getClassName({
              isActive: locationPath === '/camp/tysa',
            })}
            to="/camp/tysa"
            title="Перейти до табору Тиса"
          >
            <span className={s.navigationCamp__text}>Табір в Карпатах (Тиса)</span>
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};

export default NavigationCamp;
