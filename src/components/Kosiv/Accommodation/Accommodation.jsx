import React from 'react';
import Button from '../../Shared/Button';
import image01 from '../../../images/camp/accommodation/accommodation01.webp';
import image02 from '../../../images/camp/accommodation/accommodation02.webp';
import image03 from '../../../images/camp/accommodation/accommodation03.webp';
import image04 from '../../../images/camp/accommodation/accommodation04.webp';
import image05 from '../../../images/camp/accommodation/accommodation05.webp';
import image06 from '../../../images/camp/accommodation/accommodation06.webp';
import image07 from '../../../images/camp/accommodation/accommodation07.webp';
import image08 from '../../../images/camp/accommodation/accommodation08.webp';
import s from './Accommodation.module.scss';

const Accommodation = () => {
  return (
    <section className={s.accommodation}>
      <div className="container">
        <div className={s.accommodation__content}>
          <div className={s.accommodation__titleContent}>
            <h2 className={s.accommodation__title}>Розміщення та умови</h2>
          </div>
          <div className={s.accommodation__contentPart}>
            <div className={s.accommodation__textContent}>
              <p className={s.accommodation__textTitle}>
                Екологічне середовище: табір розташований в приватному
                еко-готелі "Писанка".
              </p>
            </div>
            <img
              src={image01}
              alt="Рафтинг у Карпатах"
              className={s.accommodation__photoContentPart}
            />
            <p className={s.accommodation__text}>
              Простора територія та інфраструктура: дбайливо доглянута
              територія, де є все необхідне для функціонування дитячих та
              підліткових таборів: футбольні та волейбольні майданчики,
              бадмінтон, тенісний стіл, басейн, альтанки та ставки. Організовано
              4-х разове харчування.
            </p>
            <div className={s.accommodation__photoContent}>
              <img
                src={image02}
                alt="Готель Писанка фасад"
                className={s.accommodation__photoContentPart}
              />
              <img
                src={image03}
                alt="Готель Писанка Басейн"
                className={s.accommodation__photoContentPart}
              />
              <img
                src={image04}
                alt="Готель Писанка йога"
                className={s.accommodation__photoContentPart}
              />
              <img
                src={image05}
                alt="Готель Писанка доміки"
                className={s.accommodation__photoContentPart}
              />
            </div>
            <p className={s.accommodation__text}>
              Комфортні умови: просторі 3-5-ти місні номери зі зручностями:
              санвузол і душ, холодна та гаряча вода. Діти живуть в номерах
              групами одного віку та статі.
            </p>
            <div className={s.accommodation__photoContent}>
              <img
                src={image06}
                alt="Їдальня"
                className={s.accommodation__photoContentPart}
              />
              <img
                src={image07}
                alt="Кімната"
                className={s.accommodation__photoContentPart}
              />
            </div>
            <p
              className={s.accommodation__textTitle}
              style={{ textAlign: 'left' }}
            >
              Безпечний простір та своєчасна допомога: вся команда підготовлена
              по курсу ПДМД. Маємо розширену укомплектовану аптечку. Штат табору
              має санітарні книги. За безпеку дітей відповідають керівники груп,
              які мають великий досвід, відповідну освіту та цілодобово
              перебувають поруч з дітьми.
            </p>
            <img
              src={image08}
              alt="Команда Middle Way"
              className={s.accommodation__photoContentPart}
            />
          </div>
          <div className={s.accommodation__btnWrapper}>
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
    </section>
  );
};

export default Accommodation;
