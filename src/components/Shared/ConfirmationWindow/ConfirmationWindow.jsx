import React, { useRef } from 'react';
import { TfiClose } from 'react-icons/tfi';
import s from './ConfirmationWindow.module.scss';

const ConfirmationWindow = ({ message, confirmClick }) => {
  const modalRef = useRef();

  const closeConfirmWindow = () => {
    confirmClick(false);
  };

  return (
    <div className={s.confirmWindow} ref={modalRef}>
      <button
        className={s.confirmWindow__closeButton}
        onClick={closeConfirmWindow}
      >
        <TfiClose color="#017683" size={15} />
      </button>
      <div className={s.boo}>
        <div className={s.face} id="face"></div>
      </div>
      <div className={s.shadow}></div>
      <p className={s.confirmWindow__text}>{`${message}`}</p>
      <div className={s.confirmWindow__buttonContent}>
        <button
          className={s.confirmWindow__confirmButtonYes}
          onClick={() => confirmClick(true)}
        >
          {'Так'}
        </button>
        <button
          className={s.confirmWindow__confirmButtonNo}
          onClick={() => confirmClick(false)}
        >
          {'Ні'}
        </button>
      </div>
    </div>
  );
};

export default ConfirmationWindow;
