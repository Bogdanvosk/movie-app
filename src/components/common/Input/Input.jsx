import cn from 'classnames';
import PropTypes from 'prop-types';

import { useFormContext } from 'react-hook-form';

import s from './Input.module.scss';

const Input = ({
  name,
  type,
  placeholder,
  isRequired = false,
  className = '',
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const validate = () => {
    if (name === 'year')
      return { value: 4, message: 'Некорректный год выпуска' };

    if (name === 'duration')
      return { value: 3, message: 'Некорректная длительность' };

    return {
      value: null,
      message: 'Обязательное поле',
    };
  };

  console.log(validate());

  return (
    <>
      <input
        {...register(name, {
          required: { value: isRequired, message: 'Обязательное поле' },
          maxLength: validate(),
        })}
        type={type}
        placeholder={placeholder}
        className={cn(s.input, { [s.incorrect]: errors[name] }, className)}
      />
      <p className={cn(s.error, { [s.show]: errors[name] })}>
        {validate().message}
      </p>
    </>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string,
  isRequired: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
