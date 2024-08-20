import React from 'react';
import OurNetwork from './OurNetwork';
import ShortAbout from './ShortAbout';
import OurLife from './OurLife';
import DevelopmentComplex from './DevelopmentComplex';
import Food from './Food';
import PricesKindergarten from './PricesKindergarten';
import OurDocuments from './OurDocuments';
import OurContacts from './OurContacts';
import EarlyDevelopment from './EarlyDevelopment';
import Appointment from 'components/Appointment';

import s from './Kindergarten.module.scss';

const Kindergarten = () => {
  return (
    <div className={s.kindergarten}>
      <div className={s.kindergarten__slide}>
        <div className={s.kindergarten__slideBackground}>
          <div className={s.kindergarten__sloganPart}>
            <h1 className={s.kindergarten__mainTitle}>
              Приватний дитячий садочок <br />
              <span className={s.kindergarten__mainTitleSecond}>
                «Мідл Вей»
              </span>
            </h1>
          </div>
        </div>
      </div>
      <OurNetwork />
      <Appointment />
      <ShortAbout />
      <OurLife />
      <DevelopmentComplex />
      <Food />
      <PricesKindergarten />
      <EarlyDevelopment />
      <OurDocuments />
      <OurContacts />
    </div>
  );
};

export default Kindergarten;
