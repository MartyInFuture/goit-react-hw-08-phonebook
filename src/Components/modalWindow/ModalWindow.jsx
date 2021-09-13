import { Modal } from 'semantic-ui-react';
import TrigerButton from './trigerButton/TrigerButton';

const ModalWindow = ({
  children,
  open,
  setOpen,
  title = '',
  size = 'tiny',
  isTrigger = true,
  trigerButton = <TrigerButton setOpen={setOpen} />,
}) => {
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size={size}
      trigger={isTrigger && trigerButton}
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};

export default ModalWindow;
