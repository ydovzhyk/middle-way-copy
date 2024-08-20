import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from '../../Shared/Button';
import image01 from '../../../images/camp_2/travel_tysa/image01.webp';
import image02 from '../../../images/camp_2/travel_tysa/image02.webp';
import image03 from '../../../images/camp_2/travel_tysa/image03.webp';

import s from './TravelTysa.module.scss';

const TravelTysa = () => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <section className={s.travel}>
      <div className="container">
        <div className={s.travel__content}>
          <div className={s.travel__titleContent}>
            <h2 className={s.travel__title}>
              Пригоди для щасливого дитинства!
            </h2>
          </div>
          <div className={s.travel__contentPart}>
            <div className={s.travel__textContent}>
              <p className={s.travel__textTitle}>
                Розмови, пригоди, пісні коло вогнища, походи в гори та незабутні
                історії чекають в Middle Way Camp. Ми підготували насичену
                програму, щоб кожна дитина мала щасливе дитинство.
              </p>
            </div>
            <div className={s.travel__textContentParts}>
              <div className={s.travel__textContentPart}>
                <div className={s.travel__imageTextContent}>
                  <div>
                    <p
                      className={s.travel__textNotes}
                      style={{
                        marginBottom: '30px',
                        marginTop: !isMobile ? '30px' : '0px',
                      }}
                    >
                      ВИРУШАЄМО ТУДИ, ДЕ ВИ ЩЕ ТОЧНО НЕ БУЛИ!
                    </p>
                    <p className={s.travel__textNotes}>
                      ЧАС ПРОВЕСТИ КАНІКУЛИ В ГЛИБИНІ УКРАЇНСЬКИХ КАРПАТ!
                    </p>
                  </div>
                </div>
              </div>
              <div className={s.travel__textContentPart}>
                <img
                  src={image01}
                  alt="Чорна Тиса річка"
                  className={s.travel__image}
                />
              </div>
            </div>
            <div
              className={s.travel__textContentParts}
              style={{
                marginTop: isDesctop ? '-80px' : isTablet ? '-100px' : '0px',
              }}
            >
              {!isMobile && (
                <div className={s.travel__textContentPart}>
                  <img
                    src={image02}
                    alt="Чорна Тиса краєвиди"
                    className={s.travel__image}
                  />
                </div>
              )}
              <div className={s.travel__textContentPart}>
                <div className={s.travel__imageTextContent}>
                  <div>
                    <p
                      className={s.travel__textNotes}
                      style={{ marginBottom: '30px', marginTop: '40px' }}
                    >
                      C. ЧОРНА ТИСА
                    </p>
                    <p
                      className={s.travel__textNotes}
                      style={{ marginBottom: '30px' }}
                    >
                      РАХІВСЬКИЙ РАЙОН
                    </p>
                    <p className={s.travel__textNotes}>ЗАКАРПАТСЬСКА ОБЛАСТЬ</p>
                  </div>
                </div>
              </div>
              {isMobile && (
                <div className={s.travel__textContentPart}>
                  <img
                    src={image02}
                    alt="Чорна Тиса краєвиди"
                    className={s.travel__image}
                  />
                </div>
              )}
            </div>
            <div
              className={s.travel__textContentParts}
              style={{
                marginTop: isDesctop ? '-80px' : isTablet ? '-100px' : '0px',
              }}
            >
              <div className={s.travel__textContentPart}>
                <div className={s.travel__imageTextContent}>
                  <div>
                    <p
                      className={s.travel__textNotes}
                      style={{ marginBottom: '40px', marginTop: '70px' }}
                    >
                      ЗАПРОШУЄМО НАСОЛОДИТИСЬ ГІРСЬКИМ ПОВІТРЯМ ТА КРАСИВОЮ
                      ПРИРОДОЮ, А ТАКОЖ ЗАНУРИТИСЯ В КУЛЬТУРУ ТА ТРАДИЦІЇ
                      ГУЦУЛЬСЬКОГО НАРОДУ!
                    </p>
                  </div>
                </div>
              </div>
              <div className={s.travel__textContentPart}>
                <img
                  src={image03}
                  alt="Чорна Тиса пам'ятник"
                  className={s.travel__image}
                />
              </div>
            </div>
            <div style={{ marginBottom: '40px' }}>
              <a
                className={s.ourschool__link}
                href="https://docs.google.com/forms/d/e/1FAIpQLSfhlljHMVLaObSh0bHulzmZ_3nXUpbRG-L4iEyivXmSDOsyJw/viewform"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button text="Записатися" btnClass="btnLight" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTysa;
