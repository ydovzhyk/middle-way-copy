import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { getLogin, getUser } from '../../../../redux/auth/auth-selectors';
import { updateIsLoginPanel } from '../../../../redux/auth/auth-slice';
import { setHeaderHeight } from '../../../../redux/technical/technical-slice';
import { logout } from '../../../../redux/auth/auth-operations';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { RxDividerVertical } from 'react-icons/rx';
import { BsEscape } from 'react-icons/bs';
import Button from '../../../Shared/Button';

import s from './UserInfo.module.scss';

const UserInfo = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isUserLogin = useSelector(getLogin);
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(logout());
    dispatch(updateIsLoginPanel(false));
    dispatch(setHeaderHeight(true));
    navigate(`/`);
  };

  const onLogin = () => {
    navigate(`/auth/login`);
  };

  if (!isUserLogin || isMobile) {
    return (
      <div className={s.userInfoSide}>
        <div className={s.userWrapper}>
          <div className={s.wrapper}>
            <BsEscape
              size={25}
              style={{
                marginRight: '10px',
                color: 'var(--icons-color)',
              }}
            />
            <Button
              text={isMobile && isUserLogin ? 'Вихід' : 'Вхід'}
              type="button"
              handleClick={isMobile && isUserLogin ? onLogout : onLogin}
              btnClass="exitHeaderBtn"
            />
          </div>
        </div>
      </div>
    );
  }

  if (isUserLogin && !isMobile) {
    return (
      <div className={s.userInfoSide}>
        <div className={s.userWrapper}>
          <div className={s.wrapper}>
            <div className={s.userBlock}>
              {user.userAvatar !== null && (
                <img
                  src={user.userAvatar}
                  alt="Userphoto"
                  className={s.userPhoto}
                />
              )}
            </div>
            <span className={s.userName}>{user.username}</span>
          </div>
          <RxDividerVertical
            size={40}
            style={{
              color: 'var(--border-color)',
            }}
          />
          <div className={s.wrapper}>
            <AiOutlinePoweroff
              size={25}
              style={{
                marginRight: '10px',
                color: 'var(--icons-color)',
              }}
            />
            <Button
              text={'Вихід'}
              type="button"
              handleClick={onLogout}
              btnClass="exitHeaderBtn"
            />
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default UserInfo;
