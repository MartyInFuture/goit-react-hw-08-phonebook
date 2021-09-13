import { Form, Button } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  contactsOperations,
  contactsSelectors,
} from '../../../../redux/contacts';
import axios from 'axios';

const EditContactForm = ({ setOpen, id }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [inputId] = useState(uuidv4());
  const [phoneInputId] = useState(uuidv4());
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const contact = contacts.find((item) => item.id === id);

    setName(contact.name);
    setNumber(contact.number);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, number };
    if (contacts.find((item) => item.name === body.name && item.id !== id)) {
      alert(`${body.name} already exist`);
      return false;
    }
    axios.patch(`/contacts/${id}`, body).then(() => {
      dispatch(contactsOperations.fetchContacts());
      setOpen(false);
      setName('');
      setNumber('');
    });
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
      <Button content="Edit" type="submit" positive />
    </Form>
  );
};

export default EditContactForm;
