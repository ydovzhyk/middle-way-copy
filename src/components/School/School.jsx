import React from 'react';
import OurSchool from './OurSchool';
import PricesSchool from './PricesSchool';
import Gallery from './Gallery';
import OurContacts from './OurContacts';
import ChooseUs from './СhooseUs';
import AreasStudy from './AreasStudy';
import Appointment from 'components/Appointment';
import useImagePreload from 'components/helpers/useImagePreload'

import s from './School.module.scss';

const School = () => {
  useImagePreload('../../images/school/school.jpg');
  return (
    <div className={s.school}>
      <div className={s.school__slide}>
        <div className={s.school__slideBackground}>
          <div className={s.school__sloganPart}>
            <h1 className={s.school__mainTitle}>
              Путрівська приватна гімназія <br />
              <span className={s.school__mainTitleSecond}>«Мідл Вей»</span>
            </h1>
          </div>
        </div>
      </div>
      <OurSchool />
      <Appointment />
      <ChooseUs />
      <AreasStudy />
      <PricesSchool />
      <Gallery />
      <OurContacts />
    </div>
  );
};

export default School;
