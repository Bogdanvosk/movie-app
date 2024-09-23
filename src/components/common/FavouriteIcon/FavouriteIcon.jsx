import cn from 'classnames';

import Icon from '../Icon/Icon';

import s from './FavouriteIcon.module.scss';

const FavouriteIcon = ({
  isFavourite,
  className = '',
  onSetFavourite = () => {},
}) => {
  return (
    <div className={cn(s.favouriteWrapper, className)} onClick={onSetFavourite}>
      <Icon
        name='heart'
        className={cn(s.favourite, { [s.isFavourite]: isFavourite })}
      />
    </div>
  );
};

export default FavouriteIcon;
