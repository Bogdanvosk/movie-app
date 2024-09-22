import Show from '../components/icons/Show';
import Edit from '../components/icons/Edit';
import Movie from '../components/icons/Movie';
import Success from '../components/icons/Success';
import Plus from '../components/icons/Plus';
import Save from '../components/icons/Save';
import Delete from '../components/icons/Delete';
import Heart from '../components/icons/Heart';

export const getIcon = (iconName) => {
  switch (iconName) {
    case 'show':
      return Show;
    case 'edit':
      return Edit;
    case 'movie':
      return Movie;
    case 'success':
      return Success;
    case 'plus':
      return Plus;
    case 'save':
      return Save;
    case 'delete':
      return Delete;
    case 'heart':
      return Heart;
    default:
      break;
  }
};
