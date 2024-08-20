import React from 'react';
import UserInfo from './UserInfo';

import s from './AuthPanel.module.scss';

const AuthPanel = () => {
  return (
    <div className={s.authPanel}>
      <div className="container">
        <div className={s.authPanel__content}>
          <div className={s.authPanel__contentText}>
            <p className={s.authPanel__text}>Адмінстративний режим сайту</p>
          </div>
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default AuthPanel;
