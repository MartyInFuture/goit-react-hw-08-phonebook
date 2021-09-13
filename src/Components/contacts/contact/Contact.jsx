import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../../redux/contacts';
import { List, Button, Icon } from 'semantic-ui-react';

const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(contactsOperations.removeContact(id));
  };

  return (
    <List.Item>
      <List.Content floated="right">
        <Button
          circular
          type="button"
          icon="delete"
          color="red"
          value={id}
          onClick={deleteItem}
        />
      </List.Content>
      <Icon name="user circle" size="big" />
      <List.Content>
        <List.Header>{name}</List.Header>
        {phone}
      </List.Content>
    </List.Item>
  );
};

export default Contact;
