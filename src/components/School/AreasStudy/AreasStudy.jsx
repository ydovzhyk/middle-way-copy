import React, { useRef } from 'react';
import { useHeaderHeight } from '../../helpers/HeaderContext/HeaderContext';
import image01 from '../../../images/school/areas_study/areas01.webp';
import image02 from '../../../images/school/areas_study/areas02.webp';
import image03 from '../../../images/school/areas_study/areas03.webp';
import image04 from '../../../images/school/areas_study/areas04.webp';
import image05 from '../../../images/school/areas_study/areas05.webp';
import image06 from '../../../images/school/areas_study/areas06.webp';
import image07 from '../../../images/school/areas_study/areas07.webp';
import image08 from '../../../images/school/areas_study/areas08.webp';

import s from './AreasStudy.module.scss';

const AreasStudy = () => {
  const headerHeight = useHeaderHeight();
  const elementarySchoolRef = useRef(null);
  const onlineSchoolRef = useRef(null);
  const externshipRef = useRef(null);
  const sectionsRef = useRef(null);

  const scrollToElement = element => {
    if (element.current) {
      const offsetTop =
        element.current.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={s.areasStudy}>
      <div className="container">
        <div className={s.areasStudy__content}>
          <div className={s.areasStudy__titleContent}>
            <h2 className={s.areasStudy__title}>Напрямки навчання</h2>
          </div>
          <div className={s.areasStudy__textContent}>
            <p className={s.areasStudy__textTitle}>
              Кожен напрямок має свою місію, завдання, перелік hard skills та
              soft skills, які ми розвиваємо.
            </p>
          </div>

          <div className={s.areasStudy__partContent}>
            <div
              className={s.areasStudy__part}
              style={{
                backgroundImage: `url(${image01})`,
                backgroundSize: 'cover',
              }}
            >
              <div className={s.areasStudy__partShadow}>
                <div className={s.areasStudy__partWrapper}>
                  <p className={s.areasStudy__partTitle}>Початкова школа</p>
                  <p className={s.areasStudy__partText}>
                    Впевнена академічна база для успішного навчання. Маємо
                    надійні і облаштовані укриття, де продовжуються заняття під
                    час повітряної тривоги
                  </p>
                  <div className={s.areasStudy__btnWrapper}>
                    <button
                      className={s.areasStudy__btn}
                      onClick={() => scrollToElement(elementarySchoolRef)}
                    >
                      дізнатися більше
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={s.areasStudy__part}
              style={{
                backgroundImage: `url(${image02})`,
                backgroundSize: 'cover',
              }}
            >
              <div className={s.areasStudy__partShadow}>
                <div className={s.areasStudy__partWrapper}>
                  <p className={s.areasStudy__partTitle}>Онлайн-навчання</p>
                  <p className={s.areasStudy__partText}>
                    Уроки в режимі реального часу, спілкування з однокласниками,
                    створення проєктів, участь у подіях і дискусіях, перебуваючи
                    вдома
                  </p>
                  <div className={s.areasStudy__btnWrapper}>
                    <button
                      className={s.areasStudy__btn}
                      onClick={() => scrollToElement(onlineSchoolRef)}
                    >
                      дізнатися більше
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={s.areasStudy__part}
              style={{
                backgroundImage: `url(${image03})`,
                backgroundSize: 'cover',
              }}
            >
              <div className={s.areasStudy__partShadow}>
                <div className={s.areasStudy__partWrapper}>
                  <p className={s.areasStudy__partTitle}>Екстернат</p>
                  <p className={s.areasStudy__partText}>
                    Можливість навчатися за індивідуальним планом та отримати
                    свідоцтво про освіту державного зразка. Надаємо навчальну
                    програму, план тем і завдань для самостійного опрацювання,
                    рекомендації підручників
                  </p>
                  <div className={s.areasStudy__btnWrapper}>
                    <button
                      className={s.areasStudy__btn}
                      onClick={() => scrollToElement(externshipRef)}
                    >
                      дізнатися більше
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={s.areasStudy__part}
              style={{
                backgroundImage: `url(${image04})`,
                backgroundSize: 'cover',
              }}
            >
              <div className={s.areasStudy__partShadow}>
                <div className={s.areasStudy__partWrapper}>
                  <p className={s.areasStudy__partTitle}>Гуртки та секції</p>
                  <p className={s.areasStudy__partText}>
                    Розкриття внутрішнього та творчого потенціалу через
                    самопізнання і дослідження оточуючого світу, бажання знайти
                    своє призачення у світі
                  </p>
                  <div className={s.areasStudy__btnWrapper}>
                    <button
                      className={s.areasStudy__btn}
                      onClick={() => scrollToElement(sectionsRef)}
                    >
                      дізнатися більше
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ref={elementarySchoolRef} className={s.areasStudy__partDetail}>
            <div
              className={s.areasStudy__textContentPart}
              style={{ marginTop: '30px' }}
            >
              <p className={s.areasStudy__title}>Початкова школа 1-4 клас</p>
            </div>
            <div className={s.areasStudy__partDetailBox}>
              <div className={s.areasStudy__partDetailWrapper}>
                <div>
                  <p
                    className={s.areasStudy__title}
                    style={{ marginBottom: '20px' }}
                  >
                    Завдання:
                  </p>
                  <ul
                    className={s.areasStudy__text}
                    style={{
                      textAlign: 'left',
                      listStyleType: 'inherit',
                      marginLeft: '20px',
                    }}
                  >
                    <li>
                      Виявлення та підтримка схильностей, здібностей і талантів
                      студента та підготовка можливостей для реалізації
                      талантів;
                    </li>
                    <li>
                      Розбудова віри студента у себе, створення ситуацій успіху,
                      відчуття смаку перших перемог “у мене виходить”;
                    </li>
                    <li>
                      Розвиток творчості, створення середовища можливостей
                      “спробувати себе в різних напрямках”;
                    </li>
                    <li>
                      Формування відчуття самостійності та відповідальності за
                      власні вчинки, формування причино-наслідкового мислення;
                    </li>
                    <li>
                      Виявлення перешкод для навчання та розвитку: психологічних
                      завад, страхів, організація партнерської роботи зі
                      студентом і батьками з усунення цих перешкод;
                    </li>
                    <li>Соціалізація та розвиток емоційного інтелекту.</li>
                  </ul>
                </div>
              </div>
              <div className={s.areasStudy__partDetailWrapper}>
                <img
                  src={image05}
                  alt="Хлопчик у початковій школі"
                  className={s.areasStudy__image}
                />
              </div>
            </div>
          </div>
          <div ref={onlineSchoolRef} className={s.areasStudy__partDetail}>
            <div
              className={s.areasStudy__textContentPart}
              style={{ marginTop: '30px' }}
            >
              <p className={s.areasStudy__title}>Онлайн школа живого формату</p>
            </div>
            <p className={s.areasStudy__text}>
              У центрі процесу навчання нашої школи знаходяться сильні сторони
              Вашої дитини. Діти навчаються швидше та краще, коли задіюють свої
              сильні сторони. А хороші стосунки з вчителями та іншими дітьми
              допомагають подолати виклики навчання.
            </p>
            <div className={s.areasStudy__partDetailBox}>
              <div className={s.areasStudy__partDetailWrapper}>
                <img
                  src={image06}
                  alt="Дівчика займається онлайн"
                  className={s.areasStudy__image}
                />
              </div>
              <div className={s.areasStudy__partDetailWrapper}>
                <div>
                  <p
                    className={s.areasStudy__title}
                    style={{ marginBottom: '20px' }}
                  >
                    Ми проводимо навчання і в онлайн-форматі для того, аби діти
                    зі всієї України мали можливість отримати освіту високої
                    якості:
                  </p>
                  <ul
                    className={s.areasStudy__text}
                    style={{
                      textAlign: 'left',
                      listStyleType: 'inherit',
                      marginLeft: '20px',
                    }}
                  >
                    <li>
                      Онлайн уроки в реальному часі, незалежність від місця
                      проживання/перебування й стану здоров'я;
                    </li>
                    <li>
                      Повноцінна шкільна освіта, індивідуалізація навчального
                      плану;
                    </li>
                    <li>
                      Додатковий вільний час на особистий розвиток дитини, хобі,
                      гуртки й подорожі;
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div ref={externshipRef} className={s.areasStudy__partDetail}>
            <div
              className={s.areasStudy__textContentPart}
              style={{ marginTop: '30px' }}
            >
              <p className={s.areasStudy__title}>Екстернатна форма навчання</p>
            </div>
            <div className={s.areasStudy__partDetailBox}>
              <div className={s.areasStudy__partDetailWrapper}>
                <div>
                  <p
                    className={s.areasStudy__title}
                    style={{ marginBottom: '20px' }}
                  >
                    Що ми пропонуємо:
                  </p>
                  <ul
                    className={s.areasStudy__text}
                    style={{
                      textAlign: 'left',
                      listStyleType: 'inherit',
                      marginLeft: '20px',
                    }}
                  >
                    <li>Навчання у власному темпі;</li>
                    <li>Мінімальна кількість оцінювань;</li>
                    <li>Платформа нового покоління;</li>
                    <li>Свідоцтво державного зразка;</li>
                    <li>Додаткові заняття з ментором;</li>
                  </ul>
                </div>
              </div>
              <div className={s.areasStudy__partDetailWrapper}>
                <img
                  src={image07}
                  alt="Підліток навчається дома"
                  className={s.areasStudy__image}
                />
              </div>
            </div>
          </div>
          <div
            ref={sectionsRef}
            className={s.areasStudy__partDetail}
            style={{ marginBottom: '40px' }}
          >
            <div
              className={s.areasStudy__textContentPart}
              style={{ marginTop: '30px' }}
            >
              <p className={s.areasStudy__title}>Гуртки та секції</p>
            </div>
            <p className={s.areasStudy__text}>
              Цікаві позашкільні заняття для різного віку та інтересів: від
              робототехніки до змішаних єдиноборств. Ми постійно розширюємо
              напрямки гуртків та клубків для того, щоб кожна дитина мала змогу
              спробувати себе в різних напрямках.
            </p>
            <div className={s.areasStudy__partDetailBox}>
              <div className={s.areasStudy__partDetailWrapper}>
                <img
                  src={image08}
                  alt="Дівчинка малює"
                  className={s.areasStudy__image}
                />
              </div>
              <div className={s.areasStudy__partDetailWrapper}>
                <div>
                  <p
                    className={s.areasStudy__text}
                    style={{ marginBottom: '20px', textAlign: 'left' }}
                  >
                    Зайняття в гуртках та секціях - це не лише можливість для
                    дітей розвивати свої таланти та захоплення, але й важлива
                    складова всебічного розвитку.
                  </p>
                  <p
                    className={s.areasStudy__text}
                    style={{ marginBottom: '20px', textAlign: 'left' }}
                  >
                    Наша школа пропонує різноманітні напрямки гуртків та секцій,
                    щоб кожна дитина мала можливість вибрати те, що відповідає
                    її інтересам та потребам. Участь у гуртках сприяє розвитку
                    творчих здібностей, формуванню нових навичок і навичок
                    співпраці в колективі. Вони надають можливість дітям виявити
                    свій потенціал у різних сферах, від робототехніки до
                    мистецтва, від спорту до науки.
                  </p>
                  <p
                    className={s.areasStudy__text}
                    style={{ marginBottom: '20px', textAlign: 'left' }}
                  >
                    Ми створюємо стимулююче середовище для кожної дитини, де
                    вони можуть відкривати для себе нові інтереси та розвивати
                    їх.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasStudy;
