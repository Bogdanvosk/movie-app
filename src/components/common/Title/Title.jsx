import PropTypes from 'prop-types';
import cn from 'classnames'

import Typography from '../Typography/Typography';

import s from './Title.module.scss';

const Title = ({ name, year, className = '' }) => {
  return (
    <Typography tag='h3' className={cn(s.name, className)}>
      {name} <span className={s.year}>({year})</span>
    </Typography>
  );
};

export default Title;

Title.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  className: PropTypes.string,
};
