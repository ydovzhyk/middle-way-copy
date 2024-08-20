import { forwardRef } from 'react';
import s from './TextAreaField.module.scss';

const TextAreaField = forwardRef(
  (
    {
      type,
      name,
      value,
      handleChange,
      placeholder,
      required,
      title,
      className,
      error,
      rows,
    },
    ref
  ) => {
    const labelClass = className ? `${s.label} ${s[className]}` : `${s.label}`;
    const inputClass = className ? `${s.input} ${s[className]}` : `${s.input}`;
    const emptyInputClass = 'hasValue';

    return (
      <label className={labelClass}>
        <textarea
          ref={ref}
          className={`${
            value !== null && value !== ''
              ? `${s.input} ${s[emptyInputClass]}`
              : inputClass
          }`}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          title={title}
          rows={rows ? rows : 1}
          cols={1000}
        />
        {value !== '' && (
          <span className={s.placeholderTop}>{placeholder}</span>
        )}
        {value === '' && (
          <span className={s.placeholderBottom}>{placeholder}</span>
        )}
        {error && <p className={s.error}>{title}</p>}
      </label>
    );
  }
);
export default TextAreaField;
