import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import SotialNetwork from '../SotialNetwork';
import { MdLocalPhone } from 'react-icons/md';
import { SlHome } from 'react-icons/sl';

import s from './AboutPanel.module.scss';

const AboutPanel = () => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });

  return (
    <div className={s.aboutPanel}>
      <div className={s.aboutPanel__partSotialContent}>
        {isDesctop && <SotialNetwork />}
        {!isMobile && (
          <div className={s.aboutPanel__partPhone}>
            <a className={s.aboutPanel__partAddress} href="tel:++380674474295">
              <MdLocalPhone color="#f99523" size={isDesctop ? 19 : 17} />
              <span className={s.aboutPanel__text}>+38 067 447 42 95</span>
            </a>
            <a className={s.aboutPanel__partAddress} href="tel:+380682201009">
              <MdLocalPhone color="#f99523" size={isDesctop ? 19 : 17} />
              <span className={s.aboutPanel__text}>+38 068 220 10 09</span>
            </a>
          </div>
        )}
        {!isDesctop && <SotialNetwork />}
      </div>
      {!isMobile && !isTablet && (
        <div className={s.aboutPanel__wrapper}>
          <div className={s.aboutPanel__partAddressContent}>
            <Link className={s.aboutPanel__partAddress} to="/contacts">
              <div className={s.aboutPanel__iconWrapper}>
                <SlHome color="#f99523" size={isDesctop ? 19 : 17} />
              </div>
              <div className={s.aboutPanel__text}>
                <address className={s.textAddress}>
                  Фастівський район, с. Путрівка, вул. Газова, 8{' '}
                  <span>(Гімназія та Садочок)</span>
                </address>
              </div>
            </Link>
          </div>
          <div className={s.aboutPanel__partAddressContent}>
            <Link className={s.aboutPanel__partAddress} to="/contacts">
              <div className={s.aboutPanel__iconWrapper}>
                <SlHome color="#f99523" size={isDesctop ? 19 : 17} />
              </div>
              <div className={s.aboutPanel__text}>
                <address className={s.textAddress}>
                  м. Васильків. ЖК Столичний, вул. Декабристів 151, корпус 5{' '}
                  <span>(Садочок)</span>
                </address>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPanel;
