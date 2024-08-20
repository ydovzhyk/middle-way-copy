import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Menu from './Menu';
import image_about from '../../../images/camp_3/about/about_camp.webp';
import image01 from '../../../images/camp_3/about/about01.png';
import image02 from '../../../images/camp_3/about/about02.png';
import image03 from '../../../images/camp_3/about/about03.png';
import image04 from '../../../images/camp_3/about/about04.png';
import image05 from '../../../images/camp_3/about/about05.webp';
import image06 from '../../../images/camp_3/about/about06.webp';
import image07 from '../../../images/camp_3/about/about07.webp';

import s from './AboutSummerCamp.module.scss';

const Welcome = () => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  return (
    <section className={s.about}>
      <div className="container">
        <div className={s.about__content}>
          <div className={s.about__titleContent}>
            <h2 className={s.about__title}>Про табір Middle Way Camp</h2>
          </div>
          <div className={s.about__contentPart}>
            <div className={s.about__partDetailBox}>
              <div className={s.about__partDetailWrapper}>
                <img
                  src={image_about}
                  alt="Дітки на майданчику"
                  className={s.about__image}
                />
              </div>
              <div className={s.about__partDetailWrapper}>
                <div>
                  <p
                    className={s.about__text}
                    style={{ marginBottom: '20px', textAlign: 'left' }}
                  >
                    Цей табір створений для легкого та активного відпочинку, де
                    кожна дитина може досягнути гармонії та детальніше
                    зануритись у розуміння своєї унікальності. Учасники мають
                    чудову нагоду познайомитись, подружитись та встановити
                    зв'язки з однолітками.
                  </p>
                  <p
                    className={s.about__text}
                    style={{ marginBottom: '20px', textAlign: 'left' }}
                  >
                    Програма табору сприяє розвитку комунікативних навичок,
                    дозволяє кожному відчути свою лідерську силу та зміцнити
                    впевненість у собі.
                  </p>
                  <p className={s.about__text} style={{ textAlign: 'left' }}>
                    Також, активності спрямовані на психологічне зміцнення
                    дітей, навчаючи їх вирішувати конфлікти та адаптуватися до
                    нових ситуацій, що є незамінними навичками у сучасному
                    світі.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={s.about__textContent}>
            <h3 className={s.about__title}>Для кого табір Middle Way Camp?</h3>
          </div>
          <div className={s.about__boxContent}>
            <div className={s.about__box}>
              <img
                src={image05}
                alt="Хлопчик мріє"
                className={s.about__boxPhoto}
              />
              <h4
                className={s.about__textTitle}
                style={{
                  marginBottom: isDesctop ? '48px' : '20px',
                }}
              >
                Для тих, хто цікавиться школою
              </h4>
              <p className={s.about__text}>
                Літній табір — це можливість познайомитися з командою дітей та
                дорослих, традиціями, відчути атмосферу школи. Middle Way — не
                просто школа. Ми — спільнота. А як і в будь-яких важливих
                стосунках, знайомство є першим кроком
              </p>
            </div>
            <div className={s.about__box}>
              <img
                src={image06}
                alt="Діти грають в настольну гру"
                className={s.about__boxPhoto}
              />
              <h4
                className={s.about__textTitle}
                style={{ marginBottom: '20px' }}
              >
                Для дітей, які навчаються в гімназії «Мідл Вей»
              </h4>
              <p className={s.about__text}>
                Літня програма дозволить нарешті зустрітися в просторі школи, де
                буде час і місце для спілкування, навчання, розвитку, але
                “по-літньому”. Більше проєктів, творчості та можливостей
                експерементувати, більше часу для спілкування та вільної гри
              </p>
            </div>
            <div className={s.about__box}>
              <img
                src={image07}
                alt="Хлопчики катаються у парку"
                className={s.about__boxPhoto}
              />
              <h4
                className={s.about__textTitle}
                style={{ marginBottom: isDesctop ? '48px' : '20px' }}
              >
                Для дітей, у яких літні канікули
              </h4>
              <p className={s.about__text}>
                Якщо у дитини є бажання досліджувати щось нове, літній табір
                стане місцем, де можна буде поєднати проєктну роботу з вільною
                грою, наповнити час різноманітними активностями
              </p>
            </div>
          </div>
          <div className={s.about__textContent}>
            <h3 className={s.about__title}>В нашому таборі ми навчимося:</h3>
          </div>
          <div className={s.about__cardContent}>
            <div className={s.about__card}>
              <img
                src={image01}
                alt='Логотип частини "Гнучкості"'
                className={s.about__imageLogo}
              />
              <h4
                className={s.about__textTitle}
                style={{ marginBottom: '20px' }}
              >
                Гнучкості
              </h4>
              <p className={s.about__text}>
                Спробуємо плавні зміни в проєктах та дослідимо наші реакції на
                них, більше дізнаємось про себе та те, як допомогти собі
                витримувати зміни та залишатися в ресурсі. Вчитись слухати та
                краще розуміти один одного, попри різний, а часом складний чи
                травматичний життєвий досвід
              </p>
            </div>
            <div className={s.about__card}>
              <img
                src={image02}
                alt='Логотип частини "Будувати стосунки"'
                className={s.about__imageLogo}
              />
              <h4
                className={s.about__textTitle}
                style={{ marginBottom: '20px' }}
              >
                Будувати стосунки
              </h4>
              <p className={s.about__text}>
                Приймати. Поважати відмінності. Стосунки є основою партнерства,
                спілкування, співпраці та довіри між людьми. Підтримуємо
                самовираження, самопізнання та самоприйняття, дозволяючи досвіду
                взаємин навчати силі взаємозв’язку та спільноти. У таборі
                створимо безпечну атмосферу для обговорення різних тем
              </p>
            </div>
            <div className={s.about__card}>
              <img
                src={image03}
                alt='Логотип частини "Грати"'
                className={s.about__imageLogo}
              />
              <h4
                className={s.about__textTitle}
                style={{ marginBottom: '20px' }}
              >
                Грати
              </h4>
              <p className={s.about__text}>
                Гра є одним із найпотужніших шляхів зростання. Гра — це не про
                перемогу. Змінюючі правила і кордони ми розширюємо свої погляди,
                вчимося співпрацювати, знаходити можливості
              </p>
            </div>
            <div className={s.about__card}>
              <img
                src={image04}
                alt='Логотип частини "Робити вибір"'
                className={s.about__imageLogo}
              />
              <h4
                className={s.about__textTitle}
                style={{ marginBottom: '20px' }}
              >
                Робити вибір
              </h4>
              <p className={s.about__text}>
                Прокачуємо свої навички обирати — команду для проєкту,
                активності, курси та багато іншого, зважаючи на власні бажання
                та можливості
              </p>
            </div>
          </div>
          <div
            className={s.about__textContent}
            style={{ marginTop: isDesctop ? '-80px' : '0px' }}
          >
            <h3 className={s.about__title}>Здорове харчування</h3>
          </div>
          <div className={s.about__muneContent}>
            <div className={s.about__munePart}>
              <Menu />
            </div>
            <div className={s.about__menuPart}>
              <ul className={s.about__menuList}>
                <li className={s.about__text}>Власна кухня</li>
                <li className={s.about__text}>
                  Здорова їжа: м’ясо, риба, сезонні овочі та фрукти, каші, яйця,
                  сир та інше
                </li>
                <li className={s.about__text}>
                  Перекуси зі свіжих овочів та фруктів
                </li>
                <li className={s.about__text}>Чиста вода у вільному доступі</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
