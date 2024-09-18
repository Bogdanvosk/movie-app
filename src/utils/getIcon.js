import Show from '../components/icons/Show';
import Edit from '../components/icons/Edit';

export const getIcon = (iconName) => {
  switch (iconName) {
    case 'show':
      return Show;
    case 'edit':
      return Edit;
    default:
      break;
  }
};
