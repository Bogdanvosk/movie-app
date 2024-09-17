import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';

import s from './Button.module.scss';

const Button = ({
  children,
  iconName = '',
  type = 'button',
  className = '',
  ...props
}) => {
  return (
    <button
      className={cn(s.button, { [s.withIcon]: iconName !== '' }, className)}
      type={type}
      {...props}
    >
      {iconName !== '' && (
        <Icon className={s.icon} name={iconName} fill='#000' />
      )}
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  iconName: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
