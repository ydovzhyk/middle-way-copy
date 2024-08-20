import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { useHeaderHeight } from 'components/helpers/HeaderContext/HeaderContext';
import Button from '../../Shared/Button/Button';

import s from './PricesKindergarten.module.scss';

const PricesKindergarten = ({ background }) => {
  const headerHeight = useHeaderHeight();
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  return (
    <section
      className={s.pricesKindergarten}
      style={{
        backgroundColor:
          background === 'white'
            ? 'var(--main-color)'
            : 'var(--background-color)',
        marginTop: background === 'white' ? '0px' : '50px',
      }}
    >
      <div className="container">
        <div className={s.pricesKindergarten__content}>
          <div className={s.pricesKindergarten__titleContent}>
            {background !== 'white' && (
              <h2 className={s.pricesKindergarten__title}>Вартість навчання</h2>
            )}
            {background === 'white' && (
              <h2 className={s.pricesKindergarten__title}>
                Вартість навчання Садок
              </h2>
            )}
          </div>
          <div className={s.pricesKindergarten__partContent}>
            <div
              className={s.pricesKindergarten__part}
              style={{
                backgroundColor:
                  background === 'white'
                    ? 'var(--background-color)'
                    : 'var(--main-color)',
              }}
            >
              <div className={s.pricesKindergarten__topPart}>
                <p
                  className={`${s.pricesKindergarten__titleText} ${s.pricesKindergarten__textTitle}`}
                >
                  Ранній розвиток "Я з мамою"
                </p>
                <div className={s.pricesKindergarten__divider}></div>
                <p
                  className={`${s.pricesKindergarten__titleText} ${s.pricesKindergarten__textTitle}`}
                >
                  1,5-2 роки
                </p>
              </div>
              <div className={s.pricesKindergarten__centralPart}>
                <p
                  className={s.pricesKindergarten__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  09:30-11:00
                </p>
                <p className={s.pricesKindergarten__text}>понеділок/четвер</p>
                <p
                  className={s.pricesKindergarten__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  10:30-12:00
                </p>
                <p className={s.pricesKindergarten__text}>вівторок/п'ятниця</p>
              </div>
              <div
                className={s.pricesKindergarten__centralPart}
                style={{ marginTop: '0px' }}
              >
                <p className={s.pricesKindergarten__text}>Монтессорі метод</p>
                <p className={s.pricesKindergarten__text}>Творча робота</p>
                <p className={s.pricesKindergarten__text}>
                  Напій зі смаколиками
                </p>
                <p className={s.pricesKindergarten__text}>
                  Повноцінний обід за бажанням
                </p>
              </div>
              <div
                className={s.pricesKindergarten__centralPart}
                style={{ marginTop: '0px', marginBottom: '120px' }}
              >
                <p className={s.pricesKindergarten__text}>
                  300 грн - 1 заняття
                </p>
                <p className={s.pricesKindergarten__text}>100 грн - обід</p>
              </div>
              <Link
                to="appointment"
                spy={true}
                smooth={true}
                duration={500}
                offset={-headerHeight - 17}
                className={s.pricesKindergarten__btnWrapper}
              >
                <Button text="Записатися" btnClass="btnLight" />
              </Link>
              {/* <div className={s.pricesKindergarten__btnWrapper}>
                <Button text="Записатися" btnClass="btnLight" />
              </div> */}
            </div>
            <div
              className={s.pricesKindergarten__part}
              style={{
                ap: isTablet ? '45px' : '45px',
                backgroundColor:
                  background === 'white'
                    ? 'var(--background-color)'
                    : 'var(--main-color)',
              }}
            >
              <div className={s.pricesKindergarten__topPart}>
                <p
                  className={`${s.pricesKindergarten__titleText} ${s.pricesKindergarten__textTitle}`}
                  style={{ width: '70%' }}
                >
                  Стандартний день
                </p>
              </div>
              <div className={s.pricesKindergarten__centralPart}>
                <p
                  className={s.pricesKindergarten__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  08:00 - 13:00
                </p>
                <p className={s.pricesKindergarten__text}>Пн-Пт</p>
              </div>
              <div
                className={s.pricesKindergarten__centralPart}
                style={{ marginTop: '0px' }}
              >
                <p className={s.pricesKindergarten__text}>
                  3 разове харчування - 180 грн.
                </p>
                <p className={s.pricesKindergarten__text}>Монтессорі метод</p>
                <p className={s.pricesKindergarten__text}>
                  Заняття з фахівцями
                </p>
                <p className={s.pricesKindergarten__text}>
                  Спортивно-рухова активність
                </p>
              </div>
              <div
                className={s.pricesKindergarten__centralPart}
                style={{
                  marginTop: '0px',
                  marginBottom: isTablet ? '75px' : '100px',
                }}
              >
                <p className={s.pricesKindergarten__text}>Абонемент</p>
                <p
                  className={s.pricesKindergarten__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  8 000 грн/в місяць
                </p>
                <p className={s.pricesKindergarten__text}>
                  *харчування оплачується додатково
                </p>
              </div>
              <Link
                to="appointment"
                spy={true}
                smooth={true}
                duration={500}
                offset={-headerHeight - 17}
                className={s.pricesKindergarten__btnWrapper}
              >
                <Button text="Записатися" btnClass="btnLight" />
              </Link>
              {/* <div className={s.pricesKindergarten__btnWrapper}>
                <Button text="Записатися" btnClass="btnLight" />
              </div> */}
            </div>
            <div
              className={s.pricesKindergarten__part}
              style={{
                gap: isTablet ? '45px' : '45px',
                backgroundColor:
                  background === 'white'
                    ? 'var(--background-color)'
                    : 'var(--main-color)',
              }}
            >
              <div className={s.pricesKindergarten__topPart}>
                <p
                  className={`${s.pricesKindergarten__titleText} ${s.pricesKindergarten__textTitle}`}
                >
                  Повний день
                </p>
              </div>
              <div className={s.pricesKindergarten__centralPart}>
                <p
                  className={s.pricesKindergarten__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  08:00-19:00
                </p>
                <p className={s.pricesKindergarten__text}>Пн-Пт</p>
              </div>
              <div
                className={s.pricesKindergarten__centralPart}
                style={{ marginTop: '0px' }}
              >
                <p className={s.pricesKindergarten__text}>
                  5 разове харчування - 250 грн.
                </p>
                <p className={s.pricesKindergarten__text}>Монтессорі метод</p>
                <p className={s.pricesKindergarten__text}>
                  Заняття з фахівцями
                </p>
                <p className={s.pricesKindergarten__text}>
                  Спортивно-рухова активність
                </p>
              </div>
              <div
                className={s.pricesKindergarten__centralPart}
                style={{
                  marginTop: '0px',
                  marginBottom: isTablet ? '75px' : '100px',
                }}
              >
                <p className={s.pricesKindergarten__text}>Абонемент</p>
                <p
                  className={s.pricesKindergarten__textTitle}
                  style={{ color: 'var(--text-color)' }}
                >
                  12 000 грн/в місяць
                </p>
                <p className={s.pricesKindergarten__text}>
                  *харчування оплачується додатково
                </p>
              </div>
              <Link
                to="appointment"
                spy={true}
                smooth={true}
                duration={500}
                offset={-headerHeight - 17}
                className={s.pricesKindergarten__btnWrapper}
              >
                <Button text="Записатися" btnClass="btnLight" />
              </Link>
              {/* <div className={s.pricesKindergarten__btnWrapper}>
                <Button text="Записатися" btnClass="btnLight" />
              </div> */}
            </div>
          </div>
          <div
            className={s.pricesKindergarten__mark}
            style={{ marginBottom: '40px' }}
          >
            <p
              className={s.pricesKindergarten__text}
              style={{ textAlign: 'left' }}
            >
              При вступі до садочку додатково оплачується одноразовий вступний
              внесок 6 000 грн.
            </p>
            <p
              className={s.pricesKindergarten__text}
              style={{ textAlign: 'left' }}
            >
              При передоплаті за період 5 або 10 місяців - знижка обговорюється.
            </p>
            <p
              className={s.pricesKindergarten__textTitle}
              style={{
                color: 'var(--text-color)',
                textAlign: 'left',
              }}
            >
              *Ціни на локаціях м. Васильків, ЖК «Столичний» та с. Путрівка
              просимо уточнити за номером телефону 0674474295
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricesKindergarten;
