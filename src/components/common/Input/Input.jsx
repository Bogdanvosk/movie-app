import cn from 'classnames';
import PropTypes from 'prop-types';

import { useFormContext } from 'react-hook-form';

import Icon from '../Icon/Icon';

import s from './Input.module.scss';

const Input = ({ fieldName, type, placeholder, className = '' }) => {
  const {
    register,
    formState: { errors, dirtyFields },
  } = useFormContext();

  const registerOptions = {
    name: { required: 'Имя обязательно' },
    genre: { required: 'Жанр обязателен' },
    year: {
      required: 'Год выпуска обязателен',
      min: {
        value: 1900,
        message: 'Некорректный год выпуска',
      },
      max: {
        value: new Date().getFullYear(),
        message: 'Некорректный год выпуска',
      },
    },
    duration: {
      required: 'Длительность обязательна',
      min: {
        value: 1,
        message: 'Некорректная длительность',
      },
      max: {
        value: 9000,
        message: 'Некорректная длительность',
      },
    },
  };

  return (
    <>
      <div className={s.inputWrapper}>
        <input
          {...register(fieldName, registerOptions[fieldName])}
          type={type}
          placeholder={placeholder}
          className={cn(
            s.input,
            { [s.incorrect]: errors[fieldName] },
            { [s.valid]: dirtyFields[fieldName] && !errors[fieldName] },
            className
          )}
        />
        <span
          className={cn(s.success, {
            [s.show]: dirtyFields[fieldName] && !errors[fieldName],
          })}
        >
          <Icon name='success' className={s.successIcon} />
        </span>
      </div>
      <p className={cn(s.error, { [s.show]: errors[fieldName] })}>
        {errors[fieldName]
          ? errors[fieldName].message
          : registerOptions[fieldName].required}
      </p>
    </>
  );
};

export default Input;

Input.propTypes = {
  fieldName: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
