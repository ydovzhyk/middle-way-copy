import { Link } from 'react-scroll';
import { useHeaderHeight } from 'components/helpers/HeaderContext/HeaderContext';
import { useMediaQuery } from 'react-responsive';
import Button from '../../Shared/Button/Button';

import s from './PricesSummerCamp.module.scss';

const PricesSchool = () => {
  const headerHeight = useHeaderHeight();
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  return (
    <section className={s.price}>
      <div className="container">
        <div className={s.price__content}>
          <div className={s.price__titleContent}>
            <h2 className={s.price__title}>Вартість участі</h2>
          </div>
          <div className={s.price__partContent}>
            <div
              className={s.price__part}
              style={{ gap: isTablet ? '45px' : '45px' }}
            >
              <div className={s.price__topPart}>
                <p className={`${s.price__titleText} ${s.price__textTitle}`}>
                  Вартість повного дня
                </p>
              </div>
              <div className={s.price__centralPart}>
                <p
                  className={s.price__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  8:00 - 19:00
                </p>
              </div>
              <div
                className={s.price__centralPart}
                style={{ marginTop: '0px' }}
              >
                <p
                  className={s.price__textTitle}
                  style={{ color: 'var(--text-color)', marginBottom: '10px' }}
                >
                  8 500 грн./зміна*
                </p>
                <p
                  className={s.price__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  900 грн./день** <br />
                  <span className={s.price__text}>(при по денній оплаті)</span>
                </p>
              </div>
              <div className={s.price__btnWrapper}>
                <Link
                  to="appointment"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-headerHeight - 17}
                  className={s.price__link}
                >
                  <Button text="Записатися" btnClass="btnSchoolCampDark" />
                </Link>
                {/* <a
                  className={s.price__link}
                  href="https://docs.google.com/forms/d/1jrkOtHX5QKc4LvveAMq2gvLtygtwloAIFE_zVYJYa6E/viewform?edit_requested=true"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button text="Записатися" btnClass="btnSchoolCampDark" />
                </a> */}
              </div>
            </div>
            <div
              className={s.price__part}
              style={{ gap: isTablet ? '45px' : '45px' }}
            >
              <div className={s.price__topPart}>
                <p className={`${s.price__titleText} ${s.price__textTitle}`}>
                  Вартість неповного дня
                </p>
              </div>
              <div className={s.price__centralPart}>
                <p
                  className={s.price__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  8:00 - 14:00
                </p>
              </div>
              <div
                className={s.price__centralPart}
                style={{ marginTop: '0px' }}
              >
                <p
                  className={s.price__textTitle}
                  style={{ color: 'var(--text-color)', marginBottom: '10px' }}
                >
                  6 500 грн./зміна*
                </p>
                <p
                  className={s.price__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  700 грн./день** <br />
                  <span className={s.price__text}>(при по денній оплаті)</span>
                </p>
              </div>
              <div className={s.price__btnWrapper}>
                <Link
                  to="appointment"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-headerHeight - 17}
                  className={s.price__link}
                >
                  <Button text="Записатися" btnClass="btnSchoolCampDark" />
                </Link>
                {/* <a
                  className={s.price__link}
                  href="https://docs.google.com/forms/d/1jrkOtHX5QKc4LvveAMq2gvLtygtwloAIFE_zVYJYa6E/viewform?edit_requested=true"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button text="Записатися" btnClass="btnSchoolCampDark" />
                </a> */}
              </div>
            </div>
          </div>
          <div className={s.price__mark}>
            <p
              className={s.price__textTitle}
              style={{ color: 'var(--text-color)', textAlign: 'left' }}
            >
              *У вартість абонементу повної зміни включено 5-разове збалансоване
              харчування, екскурсії та брендовані подарунки.
            </p>
            <p
              className={s.price__textTitle}
              style={{
                color: 'var(--text-color)',
                textAlign: 'left',
                marginBottom: '40px',
              }}
            >
              **У випадку поденної оплати у вартість включено 5-разове
              збалансоване харчування. Екскурсії та брендована продуктції
              оплачується додатково.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricesSchool;
