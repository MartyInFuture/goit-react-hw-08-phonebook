import { Form, Button } from 'semantic-ui-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  contactsOperations,
  contactsSelectors,
} from '../../../../redux/contacts';

const AddContactForm = ({ setOpen }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [inputId] = useState(uuidv4());
  const [phoneInputId] = useState(uuidv4());
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, number };
    if (contacts.find((item) => item.name === body.name)) {
      alert(`${body.name} already exist`);
      return false;
    }
    dispatch(contactsOperations.postContact(body));
    setOpen(false);
    setName('');
    setNumber('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        placeholder="Name"
        onChange={handleChange}
        type="text"
        name="name"
        value={name}
        id={inputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <Form.Input
        placeholder="Phone"
        onChange={handleChange}
        type="text"
        name="number"
        id={phoneInputId}
        value={number}
        required
      />
      <Button content="Add" type="submit" positive />
    </Form>
  );
};

export default AddContactForm;
