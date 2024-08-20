import React from 'react';
import PriceSchool from '../School/PricesSchool';
import PriceKindergarten from '../Kindergarten/PricesKindergarten';
import Appointment from 'components/Appointment';

import s from './Prices.module.scss';

const Prices = () => {
  return (
    <div className={s.prices}>
      <h1 className={s.visuallyHidden}>Middle Way - ціни на навчання</h1>
      <div className={s.prices__wrapper}>
        <Appointment />
      </div>
      <PriceSchool background={'white'} />
      <PriceKindergarten background={'white'} />
    </div>
  );
};

export default Prices;
