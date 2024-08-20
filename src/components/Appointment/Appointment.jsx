import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { sendAppointmentData } from '../../redux/technical/technical-operations';
import TextField from '../Shared/TextField/TextField';
import TextAreaField from 'components/Shared/TextAreaField/TextAreaField';
import { fields } from '../Shared/TextField/fields';
import Button from '../Shared/Button/Button';

import s from './Appointment.module.scss';

const Appointment = () => {
  const [currentPage, setCurrentPage] = useState('');
  const [btnClass, setBtnClass] = useState('btnLight');
  const dispatch = useDispatch();

  useEffect(() => {
    const page = window.location.pathname;
    if (page === '/') {
      setCurrentPage('Школа');
      setBtnClass('btnSchoolDark');
    }
    if (page === '/kindergaten') {
      setCurrentPage('Садок');
    }
    if (page === '/prices') {
      setCurrentPage('Вартість навчання');
    }
    if (page === '/camp/school' || page === '/camp') {
      setCurrentPage('Шкільний табір');
      setBtnClass('btnSchoolCampDark');
    }
  }, []);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      phone: '',
      parentName: '',
      childrenName: '',
      question: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    const userData = { ...data, fromPage: currentPage };
    dispatch(sendAppointmentData(userData));
    reset();
  };

  return (
    <section id="appointment" className={s.appointment}>
      <div className="container">
        <div className={s.appointment__content}>
          <div className={s.appointment__titleContent}>
            <h2 className={s.appointment__title}>Записатися на зустріч</h2>
          </div>
          <div className={s.appointment__textContent}>
            <p className={s.appointment__text}>
              Заповніть форму і ми зв'яжемося з вами найближчим часом для
              узгодження часу зустрічі.
            </p>
          </div>
          <form
            className={s.appointment__form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={s.appointment__formInput}>
              <Controller
                control={control}
                name="phone"
                rules={{
                  required: 'Phone is required',
                  pattern: {
                    value: /^\+?3?8?\(?\d{3}\)?\d{3}(?:-?\d{2}){2}$/,
                    message: 'Enter a valid phone number',
                  },
                }}
                render={({ field: { onChange, value }, fieldState }) => (
                  <TextField
                    value={value}
                    control={control}
                    handleChange={onChange}
                    error={fieldState.error}
                    {...fields.phone}
                  />
                )}
              />
              <Controller
                control={control}
                name="parentName"
                rules={{
                  required: 'Parent Name is required',
                  minLength: {
                    value: 2,
                    message: 'Parent Name must have at least 2 characters',
                  },
                }}
                render={({ field: { onChange, value }, fieldState }) => (
                  <TextField
                    value={value}
                    control={control}
                    handleChange={onChange}
                    error={fieldState.error}
                    {...fields.parentName}
                  />
                )}
              />
              <Controller
                control={control}
                name="childrenName"
                rules={{
                  required: 'Children Name is required',
                  minLength: {
                    value: 2,
                    message: 'Children Name must have at least 2 characters',
                  },
                }}
                render={({ field: { onChange, value }, fieldState }) => (
                  <TextField
                    value={value}
                    control={control}
                    handleChange={onChange}
                    error={fieldState.error}
                    {...fields.childrenName}
                  />
                )}
              />
            </div>
            <div className={s.appointment__questionPart}>
              <Controller
                control={control}
                name="question"
                render={({ field: { onChange, value }, fieldState }) => (
                  <TextAreaField
                    value={value}
                    rows={1}
                    control={control}
                    handleChange={onChange}
                    error={fieldState.error}
                    {...fields.question}
                  />
                )}
              />
            </div>
            <div className={s.appointment__wrap}>
              <Button text="Записатися" btnClass={btnClass} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
