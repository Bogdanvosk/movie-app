import Show from '../components/icons/Show';

export const getIcon = (iconName) => {
  switch (iconName) {
    case 'show':
      return Show;
    default:
      break;
  }
};
