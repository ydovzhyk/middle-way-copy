import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import moment from 'moment';
import {
  getEventsData,
  deleteEvent,
} from '../../../../redux/technical/technical-operations';
import {
  getEventsDates,
  getEvents,
  getMessageTechnical,
} from '../../../../redux/technical/technical-selectors';
import { saveEditEvent } from '../../../../redux/technical/technical-slice';
import { useHeaderHeight } from '../../../helpers/HeaderContext/HeaderContext';
import CalendarBig from '../../../Shared/CalendarBig/CalendarBig';
import ConfirmationWindow from '../../../Shared/ConfirmationWindow';
import EventDetails from './EventDetails';
import Button from 'components/Shared/Button';

import s from './ScheduleOfEventsAdmin.module.scss';

const ScheduleOfEventsAdmin = () => {
  const dispatch = useDispatch();
  const headerHeight = useHeaderHeight();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [selectedMonth, setSelectedMonth] = useState(moment());
  const [isShowEventsData, setIsShowEventsData] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [eventForDelete, setEventForDelete] = useState(null);
  const events = useSelector(getEvents);
  const eventsDates = useSelector(getEventsDates);
  const messageTechnical = useSelector(getMessageTechnical);
  const [isPublic, setIsPublic] = useState(false);
  const page = window.location.pathname;

  useEffect(() => {
    if (page === '/' || page === '/home') {
      setIsPublic(true);
    } else {
      setIsPublic(false);
    }
  }, [dispatch, page]);

  useEffect(() => {
    if (!selectedMonth) {
      return;
    }
    const dateFormatted =
      typeof selectedMonth === 'string'
        ? selectedMonth
        : selectedMonth.format('DD.MM.YYYY');

    dispatch(getEventsData(dateFormatted));
  }, [dispatch, selectedMonth]);

  useEffect(() => {
    if (events.length === 0) {
      setIsShowEventsData(false);
    } else {
      setIsShowEventsData(true);
    }
  }, [events.length]);

  useEffect(() => {
    if (
      messageTechnical === 'Ваша подія успішно створена.' ||
      messageTechnical === 'Подія успішно видалена.' ||
      messageTechnical === 'Подія успішно відредагована.'
    ) {
      const dateFormatted =
        typeof selectedMonth === 'string'
          ? selectedMonth
          : selectedMonth.format('DD.MM.YYYY');

      dispatch(getEventsData(dateFormatted));
    } else {
      return;
    }
  }, [messageTechnical, dispatch, selectedMonth]);

  const handleMonthChange = month => {
    const formattedMonth = moment(month).format('DD.MM.YYYY');
    setSelectedMonth(formattedMonth);
    setSelectedEvent(null);
  };

  const handleDayChange = day => {
    const formattedDay = moment(day).format('DD.MM.YYYY');
    const firstEventOnSelectedDay = events.find(
      event => event.date === formattedDay
    );
    if (firstEventOnSelectedDay) {
      setSelectedEvent(firstEventOnSelectedDay);
    } else {
      return;
    }
  };

  const handleClick = event => {
    setSelectedEvent(event);
  };

  const handleCloseEventDetails = () => {
    setSelectedEvent(null);
  };

  //Коли клікаємо на видалення події
  const handleDelete = id => {
    setShowConfirmation(true);
    setEventForDelete(id);
  };

  //Коли отримуємо результат з вікна підтвердження
  const handleConfirm = async result => {
    if (!result) {
      setShowConfirmation(false);
      setEventForDelete(null);
    } else {
      await dispatch(deleteEvent(eventForDelete));
      setShowConfirmation(false);
    }
  };

  //Зберігаємо event в store
  const handleEditEvent = data => {
    dispatch(saveEditEvent(data));
    //робимо прокрутку до компонента CreateEvent
    const element = document.getElementById('edit-event');
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={s.schedule}>
      {!isPublic && (
        <h2 className={s.schedule__title} style={{ marginBottom: '20px' }}>
          Графік подій
        </h2>
      )}
      <div>
        {isShowEventsData && (
          <h3 className={s.schedule__textTitle}>
            Обирайте дату та долучайтесь:
          </h3>
        )}
      </div>
      <div className={s.schedule__content}>
        {isMobile && (
          <div className={s.schedule__calendar}>
            <div className={s.schedule__text}>
              <CalendarBig
                eventsDates={eventsDates}
                onMonthChanged={handleMonthChange}
                onDayChanged={handleDayChange}
              />
            </div>
          </div>
        )}
        <div className={s.schedule__eventDetailContainer}>
          <div className={s.schedule__eventDetail}>
            {!isShowEventsData && (
              <h3
                className={s.schedule__textTitle}
                style={{ textAlign: 'center' }}
              >
                У поточному місяці у нас немає подій
              </h3>
            )}
            <div className={s.schedule__event}>
              {!selectedEvent && (
                <ul>
                  {events.map(event => (
                    <li
                      key={event._id}
                      className={s.schedule__subjectConteiner}
                    >
                      <div className={s.schedule__subjectContent}>
                        <div className={s.schedule__subjectTitleContent}>
                          <p
                            className={s.schedule__text}
                            style={{ fontWeight: '700' }}
                          >
                            {event.date}
                          </p>
                          <h3
                            className={s.schedule__subjectText}
                            style={{ marginTop: '10px', marginBottom: '10px' }}
                          >
                            {event.subject}
                          </h3>
                          <p
                            className={s.schedule__textAdd}
                            onClick={() => handleClick(event)}
                          >
                            дізнатися більше...
                          </p>
                        </div>
                      </div>
                      {!isPublic && (
                        <div className={s.schedule__btnContent}>
                          <Button
                            text={'Редагувати'}
                            btnClass="btnLight"
                            handleClick={() => handleEditEvent(event)}
                          />
                          <Button
                            text={'Видалити'}
                            btnClass="btnLight"
                            handleClick={() => handleDelete(event._id)}
                          />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {selectedEvent && (
                <div className={s.eventDetails}>
                  <EventDetails
                    event={selectedEvent}
                    onClose={handleCloseEventDetails}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {!isMobile && (
          <div
            className={s.schedule__calendar}
            style={{ alignItems: selectedEvent ? 'flex-start' : 'center' }}
          >
            <div className={s.schedule__text}>
              <CalendarBig
                eventsDates={eventsDates}
                onMonthChanged={handleMonthChange}
                onDayChanged={handleDayChange}
              />
            </div>
          </div>
        )}
      </div>
      {showConfirmation && (
        <ConfirmationWindow
          message={'Ви дійсно хочете видалити подію?'}
          confirmClick={handleConfirm}
        />
      )}
    </div>
  );
};

export default ScheduleOfEventsAdmin;
