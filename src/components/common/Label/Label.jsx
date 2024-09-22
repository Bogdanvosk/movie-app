import cn from 'classnames';
import PropTypes from 'prop-types';

import { useFormContext } from 'react-hook-form';

import s from './Label.module.scss';

const Label = ({ children, fieldName, title = '', className = '' }) => {
  const {
    formState: { errors, dirtyFields },
  } = useFormContext();

  return (
    <label className={cn(s.label, className)}>
      <span
        className={cn(
          s.span,
          { [s.error]: errors[fieldName] },
          { [s.valid]: dirtyFields[fieldName] && !errors[fieldName] }
        )}
      >
        {title}
      </span>
      {children}
    </label>
  );
};

export default Label;

Label.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
  fieldName: PropTypes.string,
};
