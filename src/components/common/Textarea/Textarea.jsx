import cn from 'classnames';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

import s from './Textarea.module.scss';

const Textarea = ({ fieldName, className = '', ...props }) => {
  const registerOptions = {
    review: { required: 'Рецензия обязательна' },
  };

  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <textarea
        {...register(fieldName, registerOptions[fieldName])}
        className={cn(
          s.textarea,
          { [s.incorrect]: errors[fieldName] },
          className
        )}
        {...props}
      />
      <p className={cn(s.error, { [s.show]: errors[fieldName] })}>
        {errors[fieldName] ? errors[fieldName].message : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, optio."}
      </p>
    </>
  );
};

export default Textarea;

Textarea.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};
