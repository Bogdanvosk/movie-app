import useModal from '../../../hooks/useModal';

import Typography from '../../common/Typography/Typography';
import Button from '../../common/Button/Button';
import Form from '../../common/Form/Form';
import Container from '../../common/Container/Container';
import Modal from '../../common/Modal/Modal';

const HomePage = () => {
  const [isShowingModal, toggle] = useModal();

  return (
    <>
      <Typography tag='h1'>Movie app</Typography>
      <Container>
        <Button onClick={toggle}>Добавить фильм</Button>
        <Modal show={isShowingModal} onCloseButtonClick={toggle}>
          <Form />
        </Modal>
      </Container>
    </>
  );
};

export default HomePage;
