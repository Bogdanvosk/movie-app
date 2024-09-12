import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './GridLayout.module.scss';

const GridLayout = ({ children, className = '' }) => {
  return <div className={cn(s.grid, className)}>{children}</div>;
};

export default GridLayout;

GridLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
