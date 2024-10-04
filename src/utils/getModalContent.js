import Form from '../components/common/Form/Form';
import ItemDetails from '../components/common/ItemDetails/ItemDetails';

export const getModalContent = (type) => {
  switch (type) {
    case 'add':
      return Form;
    case 'edit':
      return Form;
    case 'details':
      return ItemDetails;
    default:
      return null;
  }
};
