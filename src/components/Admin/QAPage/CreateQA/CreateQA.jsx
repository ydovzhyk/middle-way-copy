import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import {
  sendQAData,
  editQAData,
} from '../../../../redux/technical/technical-operations';
import { clearEditQA } from '../../../../redux/technical/technical-slice';
import { getEditQA } from '../../../../redux/technical/technical-selectors';
import { getUser } from '../../../../redux/auth/auth-selectors';
import { fields } from '../../../Shared/TextField/fields';
import TextAreaField from '../../../Shared/TextAreaField/TextAreaField';
import Button from '../../../Shared/Button/Button';

import s from './CreateQA.module.scss';

const CreateQA = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const [isPublic, setIsPublic] = useState(false);
  const editQA = useSelector(getEditQA);
  const answerOwner = useSelector(getUser);
  const page = window.location.pathname;

  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      question: '',
      answer: '',
    },
  });

  useEffect(() => {
    if (page === '/' || page === '/home') {
      setIsPublic(true);
      dispatch(clearEditQA());
    } else {
      setIsPublic(false);
    }
  }, [dispatch, page]);

  useEffect(() => {
    if (editQA) {
      setValue('question', editQA.question);
      setValue('answer', editQA.answer);
    } else {
      reset();
    }
  }, [editQA, setValue, reset]);

  const onSubmit = (data, e) => {
    e.preventDefault();
    const dataForUpload = {
      question: data.question,
      answer: data.answer ? data.answer : '',
      answerOwner: data.answer && answerOwner ? answerOwner.username : '',
    };
    if (!editQA) {
      dispatch(sendQAData(dataForUpload));
    } else {
      dispatch(editQAData({ ...dataForUpload, id: editQA._id }));
    }
    reset();
  };

  return (
    <section
      id="edit-QA"
      className={s.questionsandanswers}
      style={{
        paddingTop: isPublic && !isMobile ? '40px' : '0px',
        paddingBottom: isPublic && isMobile ? '0px' : '40px',
      }}
    >
      <div
        className={s.questionsandanswers__titleContent}
        style={{ marginTop: isPublic && !isMobile ? '0px' : '40px' }}
      >
        {!isPublic && (
          <h2
            className={s.questionsandanswers__title}
            style={{ marginTop: !isPublic ? '-20px' : '0px' }}
          >
            {!editQA
              ? 'Створити питання / відповідь'
              : 'Редагувати питання / відповідь'}
          </h2>
        )}
        {isPublic && (
          <p
            className={s.questionsandanswers__text}
            style={{
              marginTop: isMobile && isPublic ? '-20px' : '0px',
              marginBottom: isMobile ? '40px' : '40px',
              textAlign: 'center',
            }}
          >
            Не знайшли відповіді на своє питання? Напишіть нам або
            <a href="tel:+380674474295">
              {' '}
              <span className={s.questionsandanswers__link}>
                зателефонуйте.
              </span>
            </a>
          </p>
        )}
      </div>
      <form
        className={s.questionsandanswers__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className={s.questionsandanswers__partInput}
          style={{
            height:
              !isPublic && isDesctop
                ? '278px'
                : !isPublic && isMobile
                ? '232px'
                : !isPublic && isTablet
                ? '257px'
                : isPublic && isDesctop
                ? '120px'
                : isPublic && isTablet
                ? '110px'
                : '103px',
          }}
        >
          <Controller
            control={control}
            name="question"
            rules={{
              required: 'Question is required',
              minLength: {
                value: 10,
                message: 'Question must have at least 10 characters',
              },
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextAreaField
                value={value}
                rows={4}
                control={control}
                handleChange={onChange}
                error={fieldState.error}
                {...fields.questions}
              />
            )}
          />
          {!isPublic && (
            <Controller
              control={control}
              name="answer"
              rules={{
                required: 'Answer is required',
                minLength: {
                  value: 10,
                  message: 'Answer must have at least 10 characters',
                },
              }}
              render={({ field: { onChange, value }, fieldState }) => (
                <TextAreaField
                  value={value}
                  rows={4}
                  control={control}
                  handleChange={onChange}
                  error={fieldState.error}
                  {...fields.answers}
                />
              )}
            />
          )}
        </div>
        <div
          className={s.questionsandanswers__btnWrapper}
          style={{
            justifyContent: isPublic
              ? 'center'
              : !isPublic && isMobile
              ? 'center'
              : 'flex-start',
          }}
        >
          <Button
            text={
              isPublic
                ? 'Відправити'
                : !isPublic && editQA?._id
                ? 'Редагувати'
                : 'Опублікувати'
            }
            btnClass="btnLight"
          />
        </div>
      </form>
    </section>
  );
};

export default CreateQA;
