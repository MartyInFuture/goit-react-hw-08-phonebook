import { useState } from 'react';
import EditContactForm from './editContactForm/EditContactForm';
import ModalWindow from '../../modalWindow/ModalWindow';
import { Button } from 'semantic-ui-react';

const EditContact = ({ id }) => {
  const [open, setOpen] = useState(false);
  return (
    <ModalWindow
      open={open}
      title="Edit contact"
      setOpen={setOpen}
      trigerButton={
        <Button
          circular
          icon="pencil alternate"
          color="yellow"
          onClick={() => setOpen(true)}
        />
      }
    >
      <EditContactForm setOpen={setOpen} id={id} />
    </ModalWindow>
  );
};

export default EditContact;
