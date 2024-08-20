import Button from '../../Shared/Button';
import image01 from '../../../images/camp/prices/prices.webp';

import s from './Prices.module.scss';

const Prices = () => {
  return (
    <section className={s.prices}>
      <div className="container">
        <div className={s.prices__content}>
          <div className={s.prices__titleContent}>
            <h2 className={s.prices__title}>Вартість подорожі</h2>
          </div>
          <p
            className={s.prices__title}
            style={{ width: '100%', marginTop: '50px' }}
          >
            Перша зміна (2-15 червня) 21 400 грн.
          </p>
          <p className={s.prices__title} style={{ width: '100%' }}>
            Друга зміна (19-29 червня) 17 200 грн.
          </p>
          <div className={s.prices__btnPart} style={{ marginBottom: '0px' }}>
            <a
              className={s.prices__link}
              href="https://docs.google.com/forms/d/e/1FAIpQLSfhlljHMVLaObSh0bHulzmZ_3nXUpbRG-L4iEyivXmSDOsyJw/viewform"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button text="Записатися" btnClass="btnLight" />
            </a>
          </div>
          <div className={s.prices__partContent}>
            <div className={s.prices__textContent}>
              <ul
                className={s.prices__textTitle}
                style={{ listStyleType: 'initial', marginLeft: '10px' }}
              >
                У вартість входить:
                <li className={s.prices__text} style={{ marginTop: '20px' }}>
                  вся програма зміни
                </li>
                <li className={s.prices__text}>готельні номери</li>
                <li className={s.prices__text}>
                  послуги кураторів, інструкторів та іншого персоналу
                </li>
                <li className={s.prices__text}>4-разове харчування</li>
                <li className={s.prices__text}>медичне обслуговування</li>
                <li className={s.prices__text}>
                  басейн та інші розваги на території табору
                </li>
                <li className={s.prices__text}>фото та відео звіти</li>
                <li className={s.prices__text}>сувеніри</li>
                <li className={s.prices__text}>вхідні квитки на екскурсії</li>
              </ul>
            </div>
            <div className={s.prices__imageContent}>
              <div className={s.prices__wrapper}>
                <img
                  src={image01}
                  alt="Дівчинка збирається у подорож"
                  className={s.prices__image}
                />
              </div>
            </div>
          </div>
          <p
            className={s.prices__textTitle}
            style={{ textAlign: 'left', width: '100%', marginBottom: '40px' }}
          >
            *Дорога та страхування оплачується окремо.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prices;
