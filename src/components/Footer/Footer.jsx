import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Logo from 'components/Shared/Logo';
import SotialNetwork from 'components/Header/SotialNetwork';
import { SiGooglemaps } from 'react-icons/si';
import { MdLocalPhone } from 'react-icons/md';

import s from './Footer.module.scss';

const Footer = () => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__content}>
          <div className={s.footer__partSocial}>
            <div className={s.footer__partLogo}>
              <Logo
                width={isDesctop ? 308 : isTablet ? 263 : 185}
                height={isDesctop ? 94 : isTablet ? 80 : 56}
              />
            </div>
            <h2 className={s.footer__partTitle}>Ми в соціальних мережах:</h2>
            <SotialNetwork />
          </div>
          <div className={s.footer__partMenu}>
            <span className={s.footer__partTitle}>Меню</span>
            {/* <Link className={s.footer__link} to="/">
              <span className={s.footer__textS}>Головна</span>
            </Link> */}
            <Link className={s.footer__link} to="/">
              <span className={s.footer__textS}>Школа</span>
            </Link>
            <Link className={s.footer__link} to="/kindergaten">
              <span className={s.footer__textS}>
                {isDesctop ? 'Дитячий садок' : 'Садок'}
              </span>
            </Link>
            <Link className={s.footer__link} to="/camp">
              <span className={s.footer__textS}>Дитячий табір</span>
            </Link>
            <Link className={s.footer__link} to="/prices">
              <span className={s.footer__textS}>
                {isDesctop ? 'Вартість навчання' : 'Ціни'}
              </span>
            </Link>
            {/* <Link className={s.footer__link} to="/about">
              <span className={s.footer__textS}>Про нас</span>
            </Link> */}
            <Link className={s.footer__linkS} to="/contacts">
              <span className={s.footer__textS}>Контакти</span>
            </Link>
          </div>
          <div className={s.footer__partAddress}>
            <p
              className={s.footer__partTitle}
              style={{
                color: 'var(--accent-color-second)',
              }}
            >
              Школа:
            </p>
            <div
              className={s.footer__textContacts}
              style={{
                fontWeight: 'bold',
                marginLeft: '0px',
                marginBottom: '5px',
              }}
            >
              Путрівська приватна гімназія «Мідл Вей»
            </div>
            <Link className={s.footer__link} to="/contacts">
              <div className={s.footer__iconContainer}>
                <SiGooglemaps color="#f99523" size={isDesctop ? 19 : 17} />
              </div>
              <div className={s.footer__textContacts}>
                <address>
                  Фастівський район, с. Путрівка, вул. Газова, 8
                </address>
              </div>
            </Link>
            <a className={s.footer__link} href="tel:+380674474295">
              <div className={s.footer__iconContainer}>
                <MdLocalPhone color="#f99523" size={isDesctop ? 19 : 17} />
              </div>
              <span className={s.footer__textContacts}>+38 067 447 42 95</span>
            </a>
            <a className={s.footer__link} href="tel:+380682201009">
              <div className={s.footer__iconContainer}>
                <MdLocalPhone color="#f99523" size={isDesctop ? 19 : 17} />
              </div>
              <span className={s.footer__textContacts}>+38 068 220 10 09</span>
            </a>
            <p
              className={s.footer__partTitle}
              style={{
                marginTop: '10px',
                color: 'var(--accent-color-kindergaten)',
              }}
            >
              Дитячий садок:
            </p>
            <div
              className={s.footer__textContacts}
              style={{
                fontWeight: 'bold',
                marginLeft: '0px',
                marginBottom: '5px',
              }}
            >
              Локація 1. Приватний заклад дошкільної освіти «Мідл Вей»
            </div>
            <Link className={s.footer__link} to="/contacts">
              <div className={s.footer__iconContainer}>
                <SiGooglemaps color="#f99523" size={isDesctop ? 19 : 17} />
              </div>
              <div className={s.footer__textContacts}>
                <address>
                  Фастівський район, с. Путрівка, вул. Газова, 8
                </address>
              </div>
            </Link>
            <a className={s.footer__link} href="tel:+380674474295">
              <div className={s.footer__iconContainer}>
                <MdLocalPhone color="#f99523" size={isDesctop ? 19 : 17} />
              </div>
              <span className={s.footer__textContacts}>+38 067 447 42 95</span>
            </a>
            <a className={s.footer__link} href="tel:+380679135606">
              <div className={s.footer__iconContainer}>
                <MdLocalPhone color="#f99523" size={isDesctop ? 19 : 17} />
              </div>
              <span className={s.footer__textContacts}>+38 067 913 56 06</span>
            </a>
            <div
              className={s.footer__textContacts}
              style={{
                fontWeight: 'bold',
                marginLeft: '0px',
                marginBottom: '5px',
              }}
            >
              Локація 2. Дитячий садок «Мідл Вей»
            </div>
            <Link className={s.footer__link} to="/contacts">
              <div className={s.footer__iconContainer}>
                <SiGooglemaps color="#f99523" size={isDesctop ? 19 : 17} />
              </div>
              <div className={s.footer__textContacts}>
                <address>
                  м. Васильків. ЖК Столичний, вул. Декабристів 151, корпус 5
                </address>
              </div>
            </Link>
            <a className={s.footer__link} href="tel:+380674474295">
              <div className={s.footer__iconContainer}>
                <MdLocalPhone color="#f99523" size={isDesctop ? 19 : 17} />
              </div>
              <span className={s.footer__textContacts}>+38 067 447 42 95</span>
            </a>
            <a className={s.footer__link} href="tel:++380682201009">
              <div className={s.footer__iconContainer}>
                <MdLocalPhone color="#f99523" size={isDesctop ? 19 : 17} />
              </div>
              <span className={s.footer__textContacts}>+38 068 220 10 09</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
