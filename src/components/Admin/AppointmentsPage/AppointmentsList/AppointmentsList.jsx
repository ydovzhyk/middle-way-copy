import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAppointmentsData,
  deleteAppointment,
  editAppointment,
} from '../../../../redux/technical/technical-operations';
import {
  getTotalPages,
  getAppointments,
  getErrorTechnical,
  getMessageTechnical,
} from '../../../../redux/technical/technical-selectors';
import { getUser } from '../../../../redux/auth/auth-selectors';
import Pagination from 'components/Shared/Pagination/Pagination';
import Button from 'components/Shared/Button';

import s from './AppointmentsList.module.scss';

const AppointmentsList = () => {
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1);
  const totalPages = useSelector(getTotalPages);
  const appointments = useSelector(getAppointments);
  const [comments, setComments] = useState({});
  const isError = useSelector(getErrorTechnical);
  const isMessage = useSelector(getMessageTechnical);
  const user = useSelector(getUser);

  useEffect(() => {
    if (isError || isMessage) {
      return;
    } else {
      dispatch(getAppointmentsData(activePage));
    }
  }, [dispatch, activePage, isError, isMessage]);

  useEffect(() => {
    const initialComments = {};
    appointments.forEach(appointment => {
      initialComments[appointment._id] = appointment.addComment || '';
    });
    setComments(initialComments);
  }, [appointments]);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
    scrollToTop();
  }, [activePage]);

  const handlePageChange = page => {
    setActivePage(page);
  };

  const handleCommentChange = (id, comment) => {
    setComments({
      ...comments,
      [id]: comment,
    });
  };

  const handleCommentSubmit = id => {
    dispatch(
      editAppointment({
        id: id,
        comment: comments[id],
        commentAuthor: user.username,
      })
    );
  };

  const handleDelete = id => {
    dispatch(deleteAppointment(id));
  };

  return (
    <section className={s.appointmentsList}>
      <div className="container">
        <div className={s.appointmentsList__contant}>
          <div className={s.appointmentsList__titleContent}>
            <h2 className={s.appointmentsList__title}>
              Список користувачів записаних на зустріч:
            </h2>
          </div>
          {appointments.lenght !== 0 && (
            <ul className={s.appointmentsList__list}>
              {appointments.map(appointment => (
                <li key={appointment._id} className={s.appointmentsList__item}>
                  <div className={s.appointmentsList__itemPartClient}>
                    <p>
                      <span className={s.appointmentsList__itemMainText}>
                        Дата створення:{' '}
                      </span>
                      {new Date(appointment.dateCreated).toLocaleString()}
                    </p>
                    <p>
                      <span className={s.appointmentsList__itemMainText}>
                        Ім'я користувача:{' '}
                      </span>
                      {appointment.parentName}
                    </p>
                    <p>
                      <span className={s.appointmentsList__itemMainText}>
                        Ім'я дитини:{' '}
                      </span>
                      {appointment.childrenName}
                    </p>
                    <p>
                      <span className={s.appointmentsList__itemMainText}>
                        Телефон:{' '}
                      </span>
                      <a href={`tel:${appointment.phone}`}>
                        {appointment.phone}
                      </a>
                    </p>
                    {appointment.question && (
                      <p className={s.appointmentsList__itemQuestion}>
                        <span className={s.appointmentsList__itemMainText}>
                          Питання користувача:{' '}
                        </span>
                        <br />
                        {appointment.question}
                      </p>
                    )}
                    {appointment.fromPage && (
                      <p className={s.appointmentsList__itemQuestion}>
                        <span className={s.appointmentsList__itemMainText}>
                          Запис відбувся зі сторінки:{' '}
                        </span>
                        <br />
                        {appointment.fromPage}
                      </p>
                    )}
                  </div>
                  <div className={s.appointmentsList__itemPartUser}>
                    <textarea
                      className={s.appointmentsList__textarea}
                      value={comments[appointment._id] || ''}
                      onChange={e =>
                        handleCommentChange(appointment._id, e.target.value)
                      }
                      placeholder="Коментар від Middleway"
                      rows="5"
                    />
                    {appointment.addCommentAuthor && (
                      <div className={s.appointmentsList__authorTextPart}>
                        <p className={s.appointmentsList__authorText}>
                          Коментар додано: {appointment.addCommentAuthor}
                        </p>
                      </div>
                    )}
                    <div className={s.appointmentsList__btnWrapper}>
                      <Button
                        text={'Зберегти коментар'}
                        btnClass="btnLight"
                        handleClick={() => handleCommentSubmit(appointment._id)}
                      />
                      <Button
                        text={'Видалити Зустріч'}
                        btnClass="btnLight"
                        handleClick={() => handleDelete(appointment._id)}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {appointments.lenght === 0 && (
            <p className={s.appointmentsList__textEmpty}>
              У вас не має записів на зустріч.
            </p>
          )}
          <Pagination
            totalPages={totalPages}
            currentPage={activePage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default AppointmentsList;
