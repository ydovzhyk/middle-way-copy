import logoSlide from '../../images/camp_2/logo_sun.webp';
import TravelTysa from './TravelTysa';
import AccommodationTysa from './AccommodationTysa';
import Catalog from './Catalog';
import RoutineTysa from './RoutineTysa';
import MustHaveTysa from './MustHaveTysa';
import useImagePreload from 'components/helpers/useImagePreload';

import s from './Tysa.module.scss';

const Tysa = () => {
  useImagePreload('../../images/camp_2/camp_2.webp');
  return (
    <div className={s.tysa}>
      <div className={s.tysa__slide}>
        <div className={s.tysa__slideBackground}>
          <div className="container">
            <div className={s.tysa__slideContent}>
              <div className={s.tysa__slideLogo}>
                <img
                  src={logoSlide}
                  alt="Логотип табору"
                  className={s.tysa__imageLogo}
                />
              </div>
              <div className={s.tysa__titleContent}>
                <div className={s.tysa__titleContentWrapper}>
                  <h1 className={s.tysa__titleText}>
                    ДИТЯЧИЙ ТАБІР <br />
                    <span className={s.tysa__titleTextSecond}>В КАРПАТАХ</span>
                    <div className={s.tysa__titleDivider}></div>
                    <p className={s.tysa__titleTextSecond}>
                      ДРУГА ЗМІНА 11-21 ЛИПНЯ
                    </p>
                  </h1>
                </div>
              </div>
              <div className={s.tysa__contacts}>
                <div className={s.tysa__contactsWrapper}>
                  <div className={s.tysa__contactsPart}>
                    <p className={s.tysa__title}>
                      Приватна гімназія "Middle Way"
                    </p>
                    <p className={s.tysa__title}>с. Путрівка, вул. Газова 8</p>
                  </div>
                  <div className={s.tysa__contactsPart}>
                    <p className={s.tysa__title}>(068)-220-10-09</p>
                    <p className={s.tysa__title}>(067)-447-42-95</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TravelTysa />
      <AccommodationTysa />
      <Catalog />
      <RoutineTysa />
      <MustHaveTysa />
    </div>
  );
};

export default Tysa;
