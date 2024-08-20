import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { login } from '../../../redux/auth/auth-operations';
import { Navigate, Link } from 'react-router-dom';
import { getLogin } from '../../../redux/auth/auth-selectors';
import { fields } from '../../Shared/TextField/fields';
import TextField from '../../Shared/TextField/TextField';
import Button from '../../Shared/Button/Button';

import s from './Login.module.scss';

const Login = () => {
  const isLogin = useSelector(getLogin);
  const dispatch = useDispatch();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(login(data));
    reset();
  };

  if (isLogin) {
    return <Navigate to={`/`} />;
  }

  return (
    <section className={s.auth}>
      <div className="container">
        <div className={s.box}>
          <div className={s.linksWrapper}>
            <Link
              to={`/auth/login`}
              className={
                window.location.pathname === `/auth/login`
                  ? `${s.link} ${s.active}`
                  : s.link
              }
            >
              <h2 className={s.title}>Вхід</h2>
            </Link>
            <Link
              to={`/auth/register`}
              className={
                window.location.pathname === `/auth/register`
                  ? `${s.link} ${s.active}`
                  : s.link
              }
            >
              <h2 className={s.title}>Реєстрація</h2>
            </Link>
          </div>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              as={TextField}
              control={control}
              name="email"
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
              render={({ field: { onChange, value }, fieldState }) => (
                <TextField
                  value={value}
                  control={control}
                  handleChange={onChange}
                  error={fieldState.error}
                  {...fields.email}
                />
              )}
            />
            <Controller
              as={TextField}
              control={control}
              name="password"
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must have at least 8 characters',
                },
                maxLength: {
                  value: 20,
                  message: 'Password must have no more than 20 characters',
                },
              }}
              render={({ field: { onChange, value }, fieldState }) => (
                <TextField
                  value={value}
                  control={control}
                  handleChange={onChange}
                  error={fieldState.error}
                  autoComplete="current-password"
                  {...fields.password}
                />
              )}
            />
            <div className={s.wrap}>
              <Button text="Ввійти" btnClass="btnLight" />
            </div>
          </form>
          <Link className={s.linkHome} to={`/`}>
            Повернутися на головну
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
