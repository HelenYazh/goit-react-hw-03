import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import "./App.css";
import dataPhone from "../db/contacts.json";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [searchContact, setSearchContact] = useState("");
  const [contacts, setContacts] = useState(dataPhone);

  const handleSearch = (evt) => {
    setSearchContact(evt.target.value);
  };

  const searchedContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchContact.toLowerCase());
  });

  const onAddContact = (contact) => {
    const finalContact = {
      ...contact,
      id: nanoid(),
    };
    setContacts([...contacts, finalContact]);
  };

  const onDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={onAddContact} />
        <SearchBox value={searchContact} onChange={handleSearch} />
        <ContactList
          list={searchedContacts}
          onDeleteContact={onDeleteContact}
        />
      </div>
    </>
  );
}
