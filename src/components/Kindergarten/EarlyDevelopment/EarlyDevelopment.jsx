import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from '../../../components/Shared/Button';
import image01 from '../../../images/kindergarten/development/development01.jpg';
import s from './EarlyDevelopment.module.scss';

const EarlyDevelopment = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <section className={s.earlyDevelopment}>
      <div className="container">
        <div className={s.earlyDevelopment__content}>
          <div className={s.earlyDevelopment__titleContent}>
            <h2 className={s.earlyDevelopment__title}>
              Ранній розвиток дитини
            </h2>
          </div>
          <div className={s.earlyDevelopment__partText}>
            <p
              className={s.earlyDevelopment__title}
              style={{ color: 'var(--accent-color-kindergaten)' }}
            >
              Я з мамою - це программа раннього розвитку дитини 1-3 роки за
              Методикою Монтессорі
            </p>
            <p className={s.earlyDevelopment__textTitle}>
              Метою програми є створення оптимального розвиваючого середовища,
              яке спонукає до розвитку пізнавальної діяльності та індивідуальний
              підхід до кожної дитини.
            </p>
          </div>
          <div className={s.earlyDevelopment__contentContainer}>
            <div className={s.earlyDevelopment__partTextContainer}>
              {isMobile && (
                <div className={s.earlyDevelopment__imageContainer}>
                  <img
                    src={image01}
                    alt={'Діти в садочку з вихователькою'}
                    className={s.earlyDevelopment__image}
                  />
                </div>
              )}
              <p className={s.earlyDevelopment__text}>
                Базуючись на природніх потребах дитини, ця система виховує
                самостійних, впевнених у собі, творчих, відповідальних
                особистостей, які відчувають власні бажання.
              </p>
              <p
                className={s.earlyDevelopment__textTitle}
                style={{ textAlign: 'center' }}
              >
                Під час Монтессорі-заняття діти набувають також інших, дуже
                важливих навичок:
              </p>
              <ul
                className={s.earlyDevelopment__text}
                style={{ listStyleType: 'disc' }}
              >
                <li style={{ marginLeft: '20px' }}>
                  Уміння доводити розпочате до кінця
                </li>
                <li style={{ marginLeft: '20px' }}>
                  Уміння домовлятися з іншими дітьми, поважати їхні бажання та
                  водночас захищати свої
                </li>
                <li style={{ marginLeft: '20px' }}>
                  Відповідальність за свої дії
                </li>
                <li style={{ marginLeft: '20px' }}>Впевненість у собі</li>
                <li style={{ marginLeft: '20px' }}>
                  Навички самообслуговування
                </li>
                <li style={{ marginLeft: '20px' }}>
                  Взаємоповага та допомога один одному
                </li>
              </ul>
            </div>
            {!isMobile && (
              <div className={s.earlyDevelopment__imageContainer}>
                <img
                  src={image01}
                  alt={'Діти в садочку з вихователькою'}
                  className={s.earlyDevelopment__image}
                />
              </div>
            )}
          </div>
          <div
            className={s.earlyDevelopment__groupViberContent}
            style={{ width: '90%' }}
          >
            <p
              className={s.earlyDevelopment__textTitle}
              style={{
                color: 'var(--accent-color-second)',
                textAlign: 'center',
              }}
            >
              Приєднайтеся до групи Viber MiddleWay «Я з мамою», щоб мати змогу
              записатися та не пропустити заняття:
            </p>
            <ul className={s.earlyDevelopment__listDepartmentContent}>
              <li className={s.earlyDevelopment__listDepartment}>
                <p className={s.earlyDevelopment__textTitle}>Локація 1.</p>
                <p
                  className={s.earlyDevelopment__text}
                  style={{ textAlign: 'center' }}
                >
                  Фастівський район, с. Путрівка, вул. Газова, 8
                </p>
                <a
                  href="https://invite.viber.com/?g=GNu1wOppB0o8fvvI0d_JsoFzsP3qfQCV&amp;lang=ru"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button text="Приєднатись" btnClass="btnLight" />
                </a>
              </li>
              <li className={s.earlyDevelopment__listDepartment}>
                <p className={s.earlyDevelopment__textTitle}>Локація 2.</p>
                <p
                  className={s.earlyDevelopment__text}
                  style={{ textAlign: 'center' }}
                >
                  м. Васильків. ЖК Столичний, вул. Декабристів 151, корпус 5
                </p>
                <a
                  href="https://invite.viber.com/?g=iJwwi3JRUUbphvu7cdcfcoEeyG5Nz72U&amp;lang=ru"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button text="Приєднатись" btnClass="btnLight" />
                </a>
              </li>
            </ul>
            <div className={s.earlyDevelopment__freeCourseContent}>
              <p
                className={s.earlyDevelopment__textTitle}
                style={{
                  color: 'var(--accent-color-kindergaten)',
                  textAlign: 'center',
                }}
              >
                Запишіться на безкоштовне пробне заняття
              </p>
              <a
                className={s.slide__link}
                href="https://forms.gle/7SNCNZ8cfaL7bbFr5"
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

export default EarlyDevelopment;
