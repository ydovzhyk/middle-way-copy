import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MdLocalPhone } from 'react-icons/md';
import s from './CircleButton.module.scss';

const CircleButton = ({
  type = 'submit',
  btnClass = 'circleButton',
  handleClick,
}) => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const [isVibrating, setIsVibrating] = useState(true);
  const [buttonPosition, setButtonPosition] = useState(0);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    setButtonPosition(windowHeight / 2 - 22.5);
  }, []);

  useEffect(() => {
    const vibratingIntervalId = setInterval(() => {
      setIsVibrating(prevState => !prevState);
    }, 3000);

    const nonVibratingIntervalId = setInterval(() => {
      setIsVibrating(false);
    }, 13000);

    return () => {
      clearInterval(vibratingIntervalId);
      clearInterval(nonVibratingIntervalId);
    };
  }, []);

  return (
    <div className={s.container} style={{ bottom: `${buttonPosition}px` }}>
      <button
        className={s[btnClass]}
        onClick={handleClick}
        type={type}
        aria-label="Подзвоніть нам"
      >
        <a className={s.link} href="tel:+380674474295" itemProp="telephone">
          <div className={`${s.iconWrapper} ${isVibrating ? s.vibrating : ''}`}>
            <MdLocalPhone color="#f6f9f9" size={isDesctop ? 30 : 20} />
          </div>
        </a>
      </button>
    </div>
  );
};

export default CircleButton;
