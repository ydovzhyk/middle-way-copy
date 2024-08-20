import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.svg';

import s from './Logo.module.scss';

const Logo = ({ width, height }) => {
  return (
    <>
      <div className={s.logo}>
        <Link to="/" className={s.logo__link}>
          <img src={logo} alt="logo" style={{ width: width, height: height }} />
        </Link>
      </div>
    </>
  );
};

export default Logo;
