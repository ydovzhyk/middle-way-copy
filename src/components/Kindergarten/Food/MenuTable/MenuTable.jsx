import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import menuData from '../../../../data/menu.json';
import s from './MenuTable.module.scss';

const MenuTable = () => {
  const [selectedDay, setSelectedDay] = useState('Пн');
  const menu = menuData[selectedDay];

  const handleDayButtonClick = day => {
    setSelectedDay(day);
  };

  return (
    <div className={s.menuTable}>
      <div className={s.menuTable__part}>
        <div className={s.menuTable__navigation}>
          {['Пн', 'Вт', 'Ср', 'Чт', 'Пт'].map(day => (
            <button
              className={`${s.menuTable__btn} ${
                selectedDay === day ? s.menuTable__btnSelected : ''
              }`}
              key={day}
              onClick={() => handleDayButtonClick(day)}
            >
              {day}
            </button>
          ))}
        </div>
        <div className={s.menuTable__description}>
          <p className={s.menuTable__textTitle}>
            Раціон <span>(приклад 1-го тижня)</span>
          </p>
          <ul className={s.menuTable__descriptionPartList}>
            {menu &&
              Object.keys(menu).map(meal => (
                <li className={s.menuTable__descriptionPart} key={uuidv4()}>
                  <div className={s.menuTable__descriptionMeal}>
                    <p className={s.menuTable__text} style={{ width: '100px' }}>
                      {meal}
                    </p>
                  </div>
                  <ul className={s.menuTable__dishList}>
                    {menu[meal].map(dish => (
                      <li className={s.menuTable__text} key={uuidv4()}>
                        {dish}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      </div>
      {/* <div className={s.menuTable__partEmpty}></div> */}
    </div>
  );
};

export default MenuTable;
