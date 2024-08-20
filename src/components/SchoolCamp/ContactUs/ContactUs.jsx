import React from 'react';
import { Link } from 'react-scroll';
import { useHeaderHeight } from 'components/helpers/HeaderContext/HeaderContext';
import Button from '../../Shared/Button';
import image01 from '../../../images/camp_3/school_camp03.webp';
import s from './ContactUs.module.scss';

const Travel = () => {
  const headerHeight = useHeaderHeight();
  return (
    <section className={s.travel}>
      <div className="container">
        <div className={s.travel__content}>
          <div className={s.travel__titleContent}>
            <h2 className={s.travel__title}>Реєстрація відкрита!</h2>
          </div>
          <div
            className={s.travel__contentPart}
            style={{ marginBottom: '40px' }}
          >
            <div className={s.travel__textContentParts}>
              <div className={s.travel__textContentPart}>
                <img
                  src={image01}
                  alt="Діти в горах"
                  className={s.travel__image}
                />
              </div>
              <div className={s.travel__textContentPart}>
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
                  <a href="tel:+380682201009">
                    <span className={s.travel__text}>+38 097 950 92 69</span>
                  </a>
                  <div className={s.travel__textViberContent}>
                    <p className={s.travel__text}>Або пишіть у Viber</p>
                    <p className={s.travel__text}>"Хочу у Middle Way Camp"</p>
                  </div>
                </div>
                <div>
                  <Link
                    to="appointment"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-headerHeight - 17}
                    className={s.ourschool__link}
                  >
                    <Button text="Записатися" btnClass="btnSchoolCampDark" />
                  </Link>
                  {/* <a
                    className={s.ourschool__link}
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfhlljHMVLaObSh0bHulzmZ_3nXUpbRG-L4iEyivXmSDOsyJw/viewform"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Button text="Записатися" btnClass="btnLight" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
