import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { SiGooglemaps } from 'react-icons/si';
import { MdLocalPhone } from 'react-icons/md';

import s from './OurContacts.module.scss';

const OurContacts = () => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  return (
    <section className={s.contacts}>
      <div className="container">
        <div className={s.contacts__content}>
          <div className={s.contacts__titleContent}>
            <h2 className={s.contacts__title}>Наші контакти</h2>
          </div>
          <div className={s.contacts__part}>
            <div className={s.contacts__partList}>
              <div
                className={s.contacts__textTitle}
                style={{
                  marginBottom: '10px',
                }}
              >
                Путрівська гімназія
              </div>
              <Link className={s.contacts__link} to="/contacts">
                <div className={s.contacts__iconContainer}>
                  <SiGooglemaps
                    color="var(--main-color)"
                    size={isDesctop ? 19 : 17}
                  />
                </div>
                <div className={s.contacts__textContacts}>
                  <address>
                    Фастівський район, с. Путрівка, вул. Газова, 8
                  </address>
                </div>
              </Link>
              <a className={s.contacts__link} href="tel:+380674474295">
                <div className={s.contacts__iconContainer}>
                  <MdLocalPhone
                    color="var(--main-color)"
                    size={isDesctop ? 19 : 17}
                  />
                </div>
                <span className={s.contacts__textContacts}>
                  +38 067 447 42 95
                </span>
              </a>
              <a className={s.contacts__link} href="tel:+380682201009">
                <div className={s.contacts__iconContainer}>
                  <MdLocalPhone
                    color="var(--main-color)"
                    size={isDesctop ? 19 : 17}
                  />
                </div>
                <span className={s.contacts__textContacts}>
                  +38 068 220 10 09
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurContacts;
