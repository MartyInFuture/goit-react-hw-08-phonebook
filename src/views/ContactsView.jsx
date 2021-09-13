import AddContacts from '../Components/contacts/addContact/AddContact';
import Search from '../Components/search/Search';
import ContactsList from '../Components/contacts/ContactsList';

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
