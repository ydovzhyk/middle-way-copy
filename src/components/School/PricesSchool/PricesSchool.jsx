import { Link } from 'react-scroll';
import { useHeaderHeight } from 'components/helpers/HeaderContext/HeaderContext';
import { useMediaQuery } from 'react-responsive';
import Button from '../../Shared/Button/Button';

import s from './PricesSchool.module.scss';

const PricesSchool = ({ background }) => {
  const headerHeight = useHeaderHeight();
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  return (
    <section className={s.pricesSchool}>
      <div className="container">
        <div className={s.pricesSchool__content}>
          <div className={s.pricesSchool__titleContent}>
            {background !== 'white' && (
              <h2 className={s.pricesSchool__title}>Вартість навчання</h2>
            )}
            {background === 'white' && (
              <h2 className={s.pricesSchool__title}>Вартість навчання Школа</h2>
            )}
          </div>
          <div className={s.pricesSchool__mark}>
            <p
              className={s.pricesSchool__textTitle}
              style={{ color: 'var(--text-color)', textAlign: 'left' }}
            >
              Разовий вступний внесок - 10 000 грн. Для випускників садочку
              Middle Way - 5 000 грн.
            </p>
            <p
              className={s.pricesSchool__textTitle}
              style={{ color: 'var(--text-color)', textAlign: 'left' }}
            >
              Дисконт 10% на навчання другої дитина з сім'і.
            </p>
            <p
              className={s.pricesSchool__textTitle}
              style={{ color: 'var(--text-color)', textAlign: 'left' }}
            >
              При підписанні угоди до 30 березня діє додаткова знижка 10% на
              перший рік навчання.
            </p>
            <p
              className={s.pricesSchool__textTitle}
              style={{ color: 'var(--text-color)', textAlign: 'left' }}
            >
              Харчування оплачується окремо: Стандартний день - від 180 грн.,
              Повний день - від 250 грн.
            </p>
          </div>
          <div className={s.pricesSchool__mark} style={{ marginTop: '-20px' }}>
            <p
              className={s.pricesSchool__text}
              style={{ color: 'var(--text-color)', textAlign: 'left' }}
            >
              *Бронювання передбачає підписання угоди та здійснення першого
              платежу.
            </p>
            <p
              className={s.pricesSchool__text}
              style={{ color: 'var(--text-color)', textAlign: 'left' }}
            >
              **Знижки сумуються.
            </p>
          </div>
          <div
            className={s.pricesSchool__partContent}
            style={{ marginBottom: '40px' }}
          >
            <div
              className={s.pricesSchool__part}
              style={{ gap: isDesctop ? '56px' : isTablet ? '55px' : '45px' }}
            >
              <div className={s.pricesSchool__topPart}>
                <p
                  className={`${s.pricesSchool__titleText} ${s.pricesSchool__textTitle}`}
                >
                  Стандартний день
                </p>
              </div>
              <div className={s.pricesSchool__centralPart}>
                <p
                  className={s.pricesSchool__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  Уроки до 15.00
                </p>
                <p
                  className={s.pricesSchool__text}
                  style={{
                    marginBottom: isDesctop
                      ? '30px'
                      : isTablet
                      ? '30px'
                      : '0px',
                  }}
                >
                  Окремо оплачуються гуртки
                </p>
              </div>
              <div
                className={s.pricesSchool__centralPart}
                style={{
                  marginTop: '0px',
                }}
              >
                <p
                  className={s.pricesSchool__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  Ціна за місяць - 9 000 грн.
                </p>
                <p
                  className={s.pricesSchool__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  Ціна за семестр (5 міс.) - 42 750 грн.
                </p>
                <p
                  className={s.pricesSchool__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  Ціна за рік (10 міс.) - 83 700 грн.
                </p>
              </div>
              <div className={s.pricesSchool__btnWrapper}>
                <Link
                  to="appointment"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-headerHeight - 17}
                  className={s.ourschool__link}
                >
                  <Button text="Записатися" btnClass="btnSchoolDark" />
                </Link>
                {/* <a
                  className={s.pricesSchool__link}
                  href="https://docs.google.com/forms/d/1jrkOtHX5QKc4LvveAMq2gvLtygtwloAIFE_zVYJYa6E/viewform?edit_requested=true"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button text="Записатися" btnClass="btnSchoolDark" />
                </a> */}
              </div>
            </div>
            <div
              className={s.pricesSchool__part}
              style={{ gap: isDesctop ? '57px' : isTablet ? '57px' : '45px' }}
            >
              <div className={s.pricesSchool__topPart}>
                <p
                  className={`${s.pricesSchool__titleText} ${s.pricesSchool__textTitle}`}
                >
                  Повний день
                </p>
              </div>
              <div className={s.pricesSchool__centralPart}>
                <p
                  className={s.pricesSchool__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  Перебування до 19.00
                </p>
                <p className={s.pricesSchool__text}>
                  Безлім гуртків з 15.00 до 19.00 (окрім Smartum)
                </p>
              </div>
              <div
                className={s.pricesSchool__centralPart}
                style={{ marginTop: '0px' }}
              >
                <p
                  className={s.pricesSchool__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  Ціна за місяць - 12 000 грн.
                </p>
                <p
                  className={s.pricesSchool__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  Ціна за семестр (5 міс.) - 57 000 грн.
                </p>
                <p
                  className={s.pricesSchool__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  Ціна за рік (10 міс.) - 111 600 грн.
                </p>
              </div>
              <div className={s.pricesSchool__btnWrapper}>
                <Link
                  to="appointment"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-headerHeight - 17}
                  className={s.ourschool__link}
                >
                  <Button text="Записатися" btnClass="btnSchoolDark" />
                </Link>
                {/* <a
                  className={s.pricesSchool__link}
                  href="https://docs.google.com/forms/d/1jrkOtHX5QKc4LvveAMq2gvLtygtwloAIFE_zVYJYa6E/viewform?edit_requested=true"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button text="Записатися" btnClass="btnSchoolDark" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricesSchool;
