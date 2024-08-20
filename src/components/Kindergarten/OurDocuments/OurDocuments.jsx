import React from 'react';
import { useMediaQuery } from 'react-responsive';
import image01 from '../../../images/kindergarten/government01.webp';
import image02 from '../../../images/kindergarten/government02.webp';
import s from './OurDocuments.module.scss';

const OurDocuments = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <section className={s.documents}>
      <div className="container">
        <div className={s.documents__content}>
          <div className={s.documents__titleContent}>
            <h2 className={s.documents__title}>Наші ліцензіїї</h2>
          </div>
          <div className={s.documents__partText}>
            <p className={s.documents__text}>
              Ми працюємо в дошкільній освіті відповідно до всіх законодавчих
              норм, маємо відповідний штат та витримані санітарні норми.
            </p>
            <p className={s.documents__text}>
              Дотримання ліцензійних умови - це підтвердженння всіх параметрів
              якості освіти, кадрів, дотримання вимог і законодавчих норм в
              галузі підприємництва та освіти.
            </p>
          </div>
          <div className={s.documents__titleGovernment}>
            {!isMobile && (
              <img src={image01} alt="Герб" className={s.documents__image} />
            )}
            <div className={s.documents__titleWrapper}>
              <p className={s.documents__textTitle}>
                Департамент освіти і науки
              </p>
              <p className={s.documents__textTitle}>
                Київської обласної державної адміністрації
              </p>
            </div>
            {!isMobile && (
              <img
                src={image02}
                alt="Карта України"
                className={s.documents__image}
              />
            )}
          </div>
          <ul className={s.documents__documentsPart}>
            <li className={s.documents__list}>
              <p className={s.documents__text}>
                <span className={s.documents__textTitle}>с. Путрівка, </span>
                від 27.05.2020{' '}
                <span className={s.documents__textTitle}>№246</span>
              </p>
              <p className={s.documents__text}>
                Про видачу та анулювання ліцензій на провадження освітньої
                діяльності закладу освіти
              </p>
            </li>
            <li className={s.documents__list}>
              <p className={s.documents__text}>
                <span className={s.documents__textTitle}>м. Васильків, </span>
                від 24.06.2020{' '}
                <span className={s.documents__textTitle}>№298</span>
              </p>
              <p className={s.documents__text}>
                Про видачу та анулювання ліцензій на провадження освітньої
                діяльності закладу освіти
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurDocuments;
