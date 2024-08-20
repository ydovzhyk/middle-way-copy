import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import moment from 'moment';
import {
  sendEventData,
  editEventData,
} from '../../../../redux/technical/technical-operations';
import { getEditEvent } from '../../../../redux/technical/technical-selectors';
import { fields } from '../../../Shared/TextField/fields';
import TextField from '../../../Shared/TextField/TextField';
import TextAreaField from '../../../Shared/TextAreaField/TextAreaField';
import Calendar from '../../../Shared/Calendar/Calendar';
import FormInputFile from '../../../Shared/FormInputFile/FormInputFile';
import Button from '../../../Shared/Button/Button';

import s from './CreateEvent.module.scss';

const CreateEvent = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(moment());
  const [files, setFiles] = useState([]);
  const editEvent = useSelector(getEditEvent);

  const { control, register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      subject: '',
      description: '',
      date: selectedDate,
    },
  });

  useEffect(() => {
    if (editEvent) {
      setValue('subject', editEvent.subject);
      setValue('description', editEvent.description);
      setValue('date', editEvent.date);
    }
  }, [editEvent, setValue]);

  const handleFileUpload = event => {
    setFiles([]);
    setFiles(Array.from(event.target.files));
  };

  const onSubmit = (data, e) => {
    e.preventDefault();

    const dateFormatted =
      typeof data.date === 'string'
        ? data.date
        : data.date.format('DD.MM.YYYY');

    const dataForUpload = new FormData();
    dataForUpload.append('subject', data.subject);
    dataForUpload.append('description', data.description);
    dataForUpload.append('date', dateFormatted);
    files.forEach(file => {
      dataForUpload.append('files', file);
    });

    if (!editEvent) {
      dispatch(sendEventData(dataForUpload));
    } else {
      dataForUpload.append('id', editEvent._id);
      dispatch(editEventData(dataForUpload));
    }
    setFiles([]);
    setSelectedDate(moment());
    reset();
  };

  return (
    <section id="edit-event" className={s.events}>
      <div className="container">
        <div className={s.contant}>
          <div className={s.events__create}>
            <div className={s.events__titleContent}>
              <h2 className={s.events__title}>Стоврити нову подію</h2>
            </div>
            <form className={s.events__form} onSubmit={handleSubmit(onSubmit)}>
              <div className={s.events__formInput}>
                <div className={s.events__part}>
                  <Controller
                    control={control}
                    name="subject"
                    rules={{
                      required: 'Subject is required',
                      minLength: {
                        value: 2,
                        message: 'Subject must have at least 2 characters',
                      },
                    }}
                    render={({ field: { onChange, value }, fieldState }) => (
                      <TextField
                        value={value}
                        control={control}
                        handleChange={onChange}
                        error={fieldState.error}
                        {...fields.subject}
                      />
                    )}
                  />
                </div>
                <div className={s.events__part}>
                  <Controller
                    control={control}
                    name="description"
                    rules={{
                      required: 'Description is required',
                      minLength: {
                        value: 2,
                        message: 'Description must have at least 2 characters',
                      },
                    }}
                    render={({ field: { onChange, value }, fieldState }) => (
                      <TextAreaField
                        value={value}
                        control={control}
                        handleChange={onChange}
                        error={fieldState.error}
                        {...fields.description}
                      />
                    )}
                  />
                </div>
                <div className={s.events__part}>
                  <div className={s.events__partBackground}>
                    <Controller
                      control={control}
                      name="date"
                      rules={{
                        required: 'Date is required',
                      }}
                      render={({ field: { onChange, value } }) => (
                        <Calendar
                          dateFormat="dd.MM.yyyy"
                          showMonthYearPicker={false}
                          value={value}
                          handleChange={newValue => {
                            onChange(newValue);
                            setSelectedDate(newValue);
                          }}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className={s.events__wrap}>
                <FormInputFile
                  name="photo"
                  accept="image/png, image/jpeg"
                  register={register}
                  onChange={handleFileUpload}
                  multiple={true}
                  single={false}
                  label="Завантажити фото"
                />
                <Button
                  text={!editEvent ? 'Створити' : 'Редагувати'}
                  btnClass="btnLight"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateEvent;
