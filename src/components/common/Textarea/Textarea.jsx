import cn from 'classnames';
import PropTypes from 'prop-types';

import { useFormContext } from 'react-hook-form';

import Icon from '../Icon/Icon';

import s from './Textarea.module.scss';

const Textarea = ({ fieldName, className = '', ...props }) => {
  const {
    register,
    formState: { errors, dirtyFields },
  } = useFormContext();
  return (
    <>
      <div className={s.textareaWrapper}>
        <textarea
          {...register(fieldName, { required: 'Рецензия обязательна' })}
          className={cn(
            s.textarea,
            {
              [s.incorrect]: errors[fieldName],
              [s.valid]: dirtyFields[fieldName] && !errors[fieldName],
            },
            className
          )}
          {...props}
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
        Рецензия обязательна
      </p>
    </>
  );
};

export default Textarea;

Textarea.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};
