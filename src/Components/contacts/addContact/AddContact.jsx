import { useState } from 'react';
import AddContactForm from './addContactForm/AddContactForm';
import ModalWindow from '../../modalWindow/ModalWindow';

const AddContacts = () => {
  const [open, setOpen] = useState(false);
  return (
    <ModalWindow open={open} title="Add contact" setOpen={setOpen}>
      <AddContactForm setOpen={setOpen} />
    </ModalWindow>
  );
};

export default AddContacts;
