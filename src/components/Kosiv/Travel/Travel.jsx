import React from 'react';
import Button from '../../Shared/Button';
import image01 from '../../../images/camp/camp01.webp';
import image02 from '../../../images/camp/camp02.webp';
import s from './Travel.module.scss';

const Travel = () => {
  return (
    <section className={s.travel}>
      <div className="container">
        <div className={s.travel__content}>
          <div className={s.travel__titleContent}>
            <h2 className={s.travel__title}>До нових пригод!</h2>
          </div>
          <div className={s.travel__contentPart}>
            <div className={s.travel__textContent}>
              <p className={s.travel__textTitle}>
                Час вирушати в неймовірну подорож Карпатами з Middle Way Camp!
              </p>
            </div>
            <div className={s.travel__textContentParts}>
              <div className={s.travel__textContentPart}>
                <img
                  src={image01}
                  alt="Діти в горах"
                  className={s.travel__image}
                />
              </div>
              <div className={s.travel__textContentPart}>
                {/* <p className={s.travel__textTitle}>Реєстрація відкрита!</p> */}
                <div className={s.travel__textContentSingUp}>
                  <p className={s.travel__text}>Звертайтеся за телефонами:</p>
                  <a href="tel:+380674474295">
                    <span className={s.travel__text}>+38 067 447 42 95</span>
                  </a>
                  <a href="tel:+380679135606">
                    <span className={s.travel__text}>+38 067 913 56 06</span>
                  </a>
                  <a href="tel:+380682201009">
                    <span className={s.travel__text}>+38 068 220 10 09</span>
                  </a>
                  <div className={s.travel__textViberContent}>
                    <p className={s.travel__text}>Або пишіть у Viber</p>
                    <p className={s.travel__text}>"Махнемо в Карпати"</p>
                  </div>
                </div>
                <div>
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
            <div
              className={s.travel__textContentParts}
              style={{ marginBottom: '40px' }}
            >
              <div className={s.travel__textContentPart}>
                <ul className={s.travel__textTitle}>
                  Куди їдемо? У Карпати, Косів!
                  <li
                    className={s.travel__text}
                    style={{ marginBottom: '15px', marginTop: '20px' }}
                  >
                    Косів - місто-курорт Івано-Франківської області.
                  </li>
                  <li
                    className={s.travel__text}
                    style={{ marginBottom: '15px' }}
                  >
                    Приватний готель-садиба, простора територія,
                  </li>
                  <li className={s.travel__text}>
                    неймовірні краєвиди та екологічне середовище.
                  </li>
                </ul>
              </div>
              <div className={s.travel__textContentPart}>
                <img
                  src={image02}
                  alt="Косів краєвиди"
                  className={s.travel__image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
