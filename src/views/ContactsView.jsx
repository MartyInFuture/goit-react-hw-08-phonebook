import AddContacts from '../Components/addContact/AddContact';
import Search from '../Components/search/Search';
import ContactsList from '../Components/contacts/ContactsList';
import { Container } from 'semantic-ui-react';

const ContactsView = () => {
  return (
    <>
      <div className="space-beetwen">
        <Search />
        <AddContacts />
      </div>
      <ContactsList />
    </>
  );
};

export default ContactsView;
