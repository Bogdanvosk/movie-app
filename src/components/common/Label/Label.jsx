import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './Label.module.scss';

const Label = ({ children, title = '', className = '' }) => {
  return (
    <label className={cn(s.label, className)}>
      <span className={s.span}>{title}</span>
      {children}
    </label>
  );
};

export default Label;

Label.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
};
