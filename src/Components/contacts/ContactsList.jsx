import { useEffect } from 'react';
import Contact from './contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { List } from 'semantic-ui-react';

const ContactsList = () => {
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();
  const isLogIn = useSelector((state) => state.auth.isLogIn);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch, isLogIn]);

  return (
    <>
      {filteredContacts.length !== 0 && (
        <div>
          <List celled>
            {filteredContacts.map(({ id, name, number }) => {
              return <Contact key={id} name={name} phone={number} id={id} />;
            })}
          </List>
        </div>
      )}
    </>
  );
};

export default ContactsList;
