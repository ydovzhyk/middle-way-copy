import React from 'react';

import s from './Welcome.module.scss';

const Welcome = () => {
  return (
    <section className={s.welcome}>
      <div className="container">
        <div className={s.welcome__content}>
          <div className={s.welcome__titleContent}>
            <h2 className={s.welcome__title}>
              Літній відпочинок з Middle Way Camp!
            </h2>
          </div>
          <div className={s.welcome__contentPart}>
            <div className={s.welcome__textContent}>
              <p className={s.welcome__textTitle}>
                Middle Way Camp - це літній денний табір на локації у с.
                Путрівка для дітей 7-16 років.
              </p>
              <p className={s.welcome__textTitle}>
                Табір діятиме з 03.06 по 09.08. Щодня крім вихідних з 8 ранку до
                19 вечора.
              </p>
            </div>
          </div>
          <div className={s.welcome__textContent}>
            <p className={s.welcome__text}>
              Ми запланували 5 змін нашого табору для комфорту дітей та батьків:
            </p>
          </div>
          <div className={s.welcome__timeList}>
            <div className={s.welcome__timeContainer}>
              <div
                className={s.welcome__timeText}
                style={{ backgroundColor: '#EE3D73' }}
              >
                <p
                  className={s.welcome__title}
                  style={{ color: 'var(--main-color)', fontWeight: '400' }}
                >
                  І зміна: 03.06 - 14.06
                </p>
              </div>
            </div>
            <div className={s.welcome__timeContainer}>
              <div
                className={s.welcome__timeText}
                style={{ backgroundColor: '#FCC950' }}
              >
                <p
                  className={s.welcome__title}
                  style={{ color: 'var(--main-color)', fontWeight: '400' }}
                >
                  II зміна: 17.06 - 28.06
                </p>
              </div>
            </div>
            <div className={s.welcome__timeContainer}>
              <div
                className={s.welcome__timeText}
                style={{ backgroundColor: '#AA92C4' }}
              >
                <p
                  className={s.welcome__title}
                  style={{ color: 'var(--main-color)', fontWeight: '400' }}
                >
                  III зміна: 01.07 - 12.07
                </p>
              </div>
            </div>
            <div className={s.welcome__timeContainer}>
              <div
                className={s.welcome__timeText}
                style={{ backgroundColor: '#4E8CF3' }}
              >
                <p
                  className={s.welcome__title}
                  style={{ color: 'var(--main-color)', fontWeight: '400' }}
                >
                  IV зміна: 15.07 - 26.07
                </p>
              </div>
            </div>
            <div className={s.welcome__timeContainer}>
              <div
                className={s.welcome__timeText}
                style={{ backgroundColor: '#EB7051' }}
              >
                <p
                  className={s.welcome__title}
                  style={{ color: 'var(--main-color)', fontWeight: '400' }}
                >
                  V зміна: 29.07 - 09.08
                </p>
              </div>
            </div>
          </div>
          <div
            className={s.welcome__textContent}
            style={{ marginBottom: '40px' }}
          >
            <p className={s.welcome__text}>
              Кожна зміна насичена різноманітними активностям: командні ігри,
              квести, екскурсії, походи, творчі та кулінарні майстер-класи.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
