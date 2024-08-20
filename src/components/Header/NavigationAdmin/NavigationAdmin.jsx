import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import s from './NavigationAdmin.module.scss';

const NavigationAdmin = () => {
  const location = useLocation();
  const [locationPath, setLocationPath] = useState('/');

  useEffect(() => {
    const currentPathname = location.pathname;
    setLocationPath(currentPathname);
  }, [location.pathname]);

  const getClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  return (
    <nav className={s.navigation}>
      <div className="container">
        <div className={s.navigation__content}>
          <NavLink
            className={getClassName({
              isActive: locationPath === '/admin/appointments',
            })}
            to={`/admin/appointments`}
            title="Перейти до сторінки Призначені зустрічі"
          >
            <span className={s.navigation__text}>Зустрічі</span>
          </NavLink>
          <NavLink
            className={getClassName({
              isActive: locationPath === '/admin/events',
            })}
            to={`/admin/events`}
            title="Перейти до сторінки Події"
          >
            <span className={s.navigation__text}>Події</span>
          </NavLink>
          <NavLink
            className={getClassName({
              isActive: locationPath === '/admin/reviews',
            })}
            to={`/admin/reviews`}
            title="Перейти до сторінки Відгуки"
          >
            <span className={s.navigation__text}>Відгуки</span>
          </NavLink>
          <NavLink
            className={getClassName({
              isActive: locationPath === '/admin/questions_and_answers',
            })}
            to={`/admin/questions_and_answers`}
            title="Перейти до сторінки Питання та Відповіді"
          >
            <span className={s.navigation__text}>Q&A</span>
          </NavLink>
          {/* <NavLink
            className={getClassName({
              isActive: locationPath === '/admin/prices',
            })}
            to={`/admin/prices`}
            title="Перейти до сторінки Ціни"
          >
            <span className={s.navigation__text}>Ціни</span>
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};

export default NavigationAdmin;
