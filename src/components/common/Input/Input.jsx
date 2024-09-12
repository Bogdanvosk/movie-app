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
  const { register } = useFormContext();

  // TODO: validation logic
  // name === 'name' --- val.length should be more than 0
  // name === 'year' --- val && val.length should be less or equal than 4
  // name === 'duration' --- val && val.length should be less or equal than 3

  return (
    <input
      {...register(name, {
        required: isRequired,
      })}
      type={type}
      placeholder={placeholder}
      className={cn(s.input, className)}
    />
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
