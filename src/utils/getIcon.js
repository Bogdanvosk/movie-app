import Show from '../components/icons/Show';
import Edit from '../components/icons/Edit';
import Movie from '../components/icons/Movie';

export const getIcon = (iconName) => {
  switch (iconName) {
    case 'show':
      return Show;
    case 'edit':
      return Edit;
    case 'movie':
      return Movie;
    default:
      break;
  }
};
