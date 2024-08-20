import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from '../../Shared/Button';
import image01 from '../../../images/camp/program/program01.webp';
import image02 from '../../../images/camp/program/program02.webp';
import image03 from '../../../images/camp/program/program03.webp';
import image04 from '../../../images/camp/program/program04.webp';
import image05 from '../../../images/camp/logo_white.png';
import image06 from '../../../images/camp/program/logo01.png';
import image07 from '../../../images/camp/program/program07.webp';
import image08 from '../../../images/camp/program/logo02.png';
import image09 from '../../../images/camp/program/program09.webp';
import image10 from '../../../images/camp/program/program10.webp';
import image11 from '../../../images/camp/program/program11.webp';
import image12 from '../../../images/camp/program/program12.webp';
import image13 from '../../../images/camp/program/program13.webp';
import image14 from '../../../images/camp/program/program14.webp';
import s from './Program.module.scss';

const Program = () => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  return (
    <section className={s.program}>
      <div className="container">
        <div className={s.program__content}>
          <div className={s.program__titleContent}>
            <h2 className={s.program__title}>Програма подорожі</h2>
          </div>
          <div className={s.program__contentOverview}>
            <div className={s.program__contentPartOverview}>
              <ul
                className={s.program__title}
                style={{
                  textAlign: 'left',
                  listStyleType: 'initial',
                  gap: '15',
                }}
              >
                <p>На вас чекають:</p>
                <li className={s.program__textTitle}>
                  ЗНАЙОМТСВО З ГУЦУЛЬСЬКИМИ ТРАДИЦІЯМИ, КУЛЬТУРОЮ ТА ПОБУТОМ
                </li>
                <li className={s.program__textTitle}>
                  ПОХОДИ В ГОРИ ТА ПРОГУЛЯНКИ В ЛІС, РІЧКИ ТА ВОДОСПАДИ
                </li>
                <li className={s.program__textTitle}>
                  ІППОТЕРАПІЯ ТА КАТАННЯ НА КОНЯХ
                </li>
                <li className={s.program__textTitle}>
                  БЕЗЛІЧ ЦІКАВИХ МАЙСТЕРОК
                </li>
                <li className={s.program__textTitle}>КВЕСТИ ТА БРЕЙН-РИНГИ</li>
                <li className={s.program__textTitle}>ТЕМАТИЧНІ ВЕЧІРКИ</li>
                <li className={s.program__textTitle}>ДИСКОТЕКИ</li>
                <li className={s.program__textTitle}>ПІКНІКИ ТА BBQ-PARTY</li>
                <li className={s.program__textTitle}>
                  ФІТНЕС, ЙОГА ТА СПОРТИВНІ ІГРИ
                </li>
                <li className={s.program__textTitle}>
                  НЕЙМОВІРНО КРУТА ГРА LASERTAG
                </li>
              </ul>
              {isDesctop && (
                <div className={s.program__imageLogoWrapper}>
                  <img
                    src={image05}
                    alt="Логотип"
                    className={s.program__imegeLogo}
                  />
                </div>
              )}
            </div>
            <div className={s.program__photoContent}>
              <img
                src={image01}
                alt="Річка та ліс у Карпатах"
                className={s.program__photoContentPart}
              />
              <img
                src={image02}
                alt="Кінні прогулянки"
                className={s.program__photoContentPart}
              />
              <img
                src={image03}
                alt="Йога у Карпатах"
                className={s.program__photoContentPart}
              />
              <img
                src={image04}
                alt="Прогулянки лісами Карпат"
                className={s.program__photoContentPart}
              />
            </div>
            <div className={s.program__locationPart}>
              <div>
                <img
                  src={image06}
                  alt='"Логотип Гуцульщина"'
                  className={s.program__photoContentPart}
                />
              </div>
              <p
                className={s.program__textTitleSecond}
                style={{ textAlign: 'center' }}
              >
                Національний природний парк "Гуцульщина"
              </p>
              <p className={s.program__text}>
                Поєднання неповторної природної краси з етнічними та
                історико-культурними надбаннями Гуцулів.
              </p>
              <img
                src={image07}
                alt='природний парк "Гуцульщина"'
                className={s.program__photoContentPart}
              />
              <div>
                <img
                  src={image08}
                  alt="Логотип Світлиця"
                  className={s.program__photoContentPart}
                />
              </div>
              <p className={s.program__textTitleSecond}>
                Музейно-креативний простір
              </p>
              <p className={s.program__text}>
                Народне мистецтво, побут, традиції, ремесла етнічного регіону
                України – Гуцульщини.
              </p>
              <div className={s.program__photoContent}>
                <img
                  src={image09}
                  alt='Жіночий костюм "Гуцульщина"'
                  className={s.program__photoContentPart}
                />
                <img
                  src={image10}
                  alt='Чоловічий костюм "Гуцульщина"'
                  className={s.program__photoContentPart}
                />
              </div>
              <p className={s.program__text}>
                Науково-просвітницький центр з поєднанням науки, освіти та
                рекреації. Познайомимось із експозиціями зоології, ентомології,
                орнітології, дендрології, мікології, геології. Оглянемо гербарії
                рослин Карпатського краю.
              </p>
              <img
                src={image11}
                alt='Фасад будівлі парку "Гуцульщина"'
                className={s.program__photoContentPart}
              />
            </div>
            <div className={s.program__locationPart}>
              <p
                className={s.program__textTitleSecond}
                style={{ textAlign: 'center' }}
              >
                Маєток Святого Миколая
              </p>
              <p className={s.program__text}>
                Зануримося в казку зі солодким присмаком дитинства. Помічники
                Святого Миколая охоче відкриють нам двері маєтку. Напишемо листа
                Миколаю та відвідаємо кімнату "Новорічно-різдвяної іграшки", де
                навіть влітку панує атмосфера Різдва, і власноруч виготовимо
                новорічну іграшку.
              </p>
              <div className={s.program__photoContent}>
                <img
                  src={image13}
                  alt="Садиба Святого Миколая"
                  className={s.program__photoContentPart}
                />
                <img
                  src={image12}
                  alt="Кабінет Святого Миколая"
                  className={s.program__photoContentPart}
                />
              </div>
            </div>
            <div className={s.program__locationPart}>
              <p
                className={s.program__textTitleSecond}
                style={{ textAlign: 'center' }}
              >
                Рафтинг
              </p>
              <p className={s.program__text}>
                Для справжніх сміливців та любителів екстриму - рафтинг річки
                Черемош. Човни для рафтингу, розроблені спеціально для
                туристичних сплавів, мають максимально безпечну конструкцію.
                Спорядження для сплаву надається якісне та надійне.
              </p>
              <img
                src={image14}
                alt="Рафтинг у Карпатах"
                className={s.program__photoContentPart}
              />
            </div>
            <div className={s.program__btnPart}>
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

export default Program;
