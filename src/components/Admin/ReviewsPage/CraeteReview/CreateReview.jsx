import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import moment from 'moment';
import { useMediaQuery } from 'react-responsive';
import {
  sendReviewData,
  editReviewData,
} from '../../../../redux/technical/technical-operations';
import { clearEditReview } from '../../../../redux/technical/technical-slice';
import { getEditReview } from '../../../../redux/technical/technical-selectors';
import { fields } from '../../../Shared/TextField/fields';
import TextField from '../../../Shared/TextField/TextField';
import TextAreaField from '../../../Shared/TextAreaField/TextAreaField';
import Calendar from '../../../Shared/Calendar/Calendar';
import FormInputFile from '../../../Shared/FormInputFile/FormInputFile';
import Button from '../../../Shared/Button/Button';

import s from './CreateReview.module.scss';

const CreateReview = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(moment());
  const [isPublic, setIsPublic] = useState(false);
  const [file, setFile] = useState(null);
  const editReview = useSelector(getEditReview);
  const page = window.location.pathname;

  const { control, register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      nameOwnerReview: '',
      review: '',
      dataSource: '',
      date: selectedDate,
    },
  });

  useEffect(() => {
    if (page === '/' || page === '/home') {
      setIsPublic(true);
      dispatch(clearEditReview());
    } else {
      setIsPublic(false);
    }
  }, [dispatch, page]);

  useEffect(() => {
    if (editReview) {
      setValue('nameOwnerReview', editReview.nameOwnerReview);
      setValue('review', editReview.review);
      setValue('date', editReview.date);
      setValue('dataSource', editReview.dataSource);
    } else {
      reset();
    }
  }, [editReview, setValue, reset]);

  const handleFileUpload = event => {
    const file = event.target.files[0];
    setFile(file);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();

    const dateFormatted =
      typeof data.date === 'string'
        ? data.date
        : data.date.format('DD.MM.YYYY');

    const dataForUpload = new FormData();
    dataForUpload.append('nameOwnerReview', data.nameOwnerReview);
    dataForUpload.append('review', data.review);
    dataForUpload.append(
      'dataSource',
      isPublic ? 'відгук з сайту' : data.dataSource
    );
    dataForUpload.append('verified', isPublic ? false : true);
    dataForUpload.append('date', dateFormatted);
    dataForUpload.append('photo', file);

    if (!editReview) {
      dispatch(sendReviewData(dataForUpload));
    } else {
      dataForUpload.append('id', editReview._id);
      dataForUpload.append('dateSort', editReview.dateSort);
      dispatch(editReviewData(dataForUpload));
    }
    setFile(null);
    setSelectedDate(moment());
    reset();
  };

  return (
    <section id="edit-review" className={s.review}>
      <div
        className={s.review__titleContent}
        style={{ marginTop: isPublic && !isMobile ? '0px' : '20px' }}
      >
        <h2 className={s.review__title}>
          {isPublic
            ? 'Залишити відгук'
            : !editReview
            ? 'Стоврити новий відгук'
            : 'Редагувати відгук'}
        </h2>
        {isPublic && (
          <p
            className={s.review__text}
            style={{ marginTop: '30px', textAlign: 'center' }}
          >
            Якщо у вас є досвід взаємодії з нами, будемо вдячні, якщо Ви
            залишите ваш відгук!
          </p>
        )}
      </div>
      <form className={s.review__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.review__formInput}>
          <div
            className={s.review__part}
            style={{
              width: !isMobile && !isPublic ? '24%' : isMobile ? '100%' : '30%',
            }}
          >
            <Controller
              control={control}
              name="nameOwnerReview"
              rules={{
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must have at least 2 characters',
                },
              }}
              render={({ field: { onChange, value }, fieldState }) => (
                <TextField
                  value={value}
                  control={control}
                  handleChange={onChange}
                  error={fieldState.error}
                  {...fields.nameOwnerReview}
                />
              )}
            />
          </div>
          <div
            className={s.review__part}
            style={{
              width: !isMobile && !isPublic ? '24%' : isMobile ? '100%' : '65%',
            }}
          >
            <Controller
              control={control}
              name="review"
              rules={{
                required: 'Review is required',
                minLength: {
                  value: 2,
                  message: 'Review must have at least 2 characters',
                },
              }}
              render={({ field: { onChange, value }, fieldState }) => (
                <TextAreaField
                  value={value}
                  rows={isPublic && !isMobile ? 7 : 1}
                  control={control}
                  handleChange={onChange}
                  error={fieldState.error}
                  {...fields.review}
                />
              )}
            />
          </div>
          {!isPublic && (
            <div
              className={s.review__part}
              style={{
                width:
                  !isMobile && !isPublic ? '24%' : isMobile ? '100%' : '30%',
              }}
            >
              <Controller
                control={control}
                name="dataSource"
                rules={{
                  required: 'Data Source is required',
                  minLength: {
                    value: 2,
                    message: 'Data Source must have at least 2 characters',
                  },
                }}
                render={({ field: { onChange, value }, fieldState }) => (
                  <TextField
                    value={value}
                    control={control}
                    handleChange={onChange}
                    error={fieldState.error}
                    {...fields.dataSource}
                  />
                )}
              />
            </div>
          )}
          {!isPublic && (
            <div
              className={s.review__part}
              style={{
                width:
                  !isMobile && !isPublic ? '24%' : isMobile ? '100%' : '30%',
              }}
            >
              <div className={s.review__partBackground}>
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
          )}
        </div>
        <div
          className={s.review__wrap}
          style={{
            marginTop:
              isPublic && !isMobile
                ? '30px'
                : !isPublic && isMobile
                ? '20px'
                : '40px',
          }}
        >
          <FormInputFile
            name="photo"
            accept="image/png, image/jpeg"
            register={register}
            onChange={handleFileUpload}
            multiple={false}
            single={true}
            label={!isMobile ? 'Додати фото' : 'Фото'}
          />
          <Button
            text={
              isPublic
                ? 'Відправити'
                : !isPublic && editReview && editReview.verified
                ? 'Редагувати'
                : !isPublic && editReview && !editReview.verified
                ? 'Прийняти'
                : 'Створити'
            }
            btnClass="btnLight"
          />
        </div>
      </form>
    </section>
  );
};

export default CreateReview;
