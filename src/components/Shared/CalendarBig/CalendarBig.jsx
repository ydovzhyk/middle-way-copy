import React, { useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { uk, ru } from 'date-fns/locale';

import 'react-datepicker/dist/react-datepicker.css';
import './datepickerStyles.css';

const CalendarBig = ({ eventsDates, onMonthChanged, onDayChanged }) => {
  const formattedDates = eventsDates.map(dateString => new Date(dateString));
  const [language] = useState('ukr');

  registerLocale(
    language === 'ukr' ? 'uk' : 'ru',
    language === 'ukr' ? uk : ru
  );
  setDefaultLocale(language === 'ukr' ? 'uk' : 'ru');

  const customWeekdayShort = (dayIndex, options) => {
    let weekdays;
    if (language === 'ukr') {
      weekdays = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    } else {
      weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    }
    return weekdays[dayIndex];
  };

  return (
    <div>
      <DatePicker
        locale={language === 'ukr' ? 'uk' : 'ru'}
        selected={new Date()}
        onChange={onDayChanged}
        onMonthChange={onMonthChanged}
        inline
        highlightDates={formattedDates}
        formatWeekDayShort={customWeekdayShort}
      />
    </div>
  );
};

export default CalendarBig;
