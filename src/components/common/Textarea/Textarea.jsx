import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './Textarea.module.scss';
import { useFormContext } from 'react-hook-form';

const Textarea = ({ name, isRequired = false, className = '', ...props }) => {
  const { register } = useFormContext();
  return (
    <textarea
      {...register(name, { required: isRequired })}
      className={cn(s.textarea, className)}
      {...props}
    />
  );
};

export default Textarea;

Textarea.propTypes = {
  name: PropTypes.string,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
};
