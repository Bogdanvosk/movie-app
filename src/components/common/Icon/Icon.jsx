import PropTypes from 'prop-types';

import { getIcon } from '../../../utils/getIcon';

const Icon = ({ name, className = '', ...props }) => {
  const SVGIcon = getIcon(name);
  return <SVGIcon className={className} {...props} />;
};

export default Icon;

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
};
