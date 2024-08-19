import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import "./App.css";
import dataPhone from "../db/contacts.json";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [searchContact, setSearchContact] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("saved-contacts");
    return savedContacts ? JSON.parse(savedContacts).contacts : dataPhone;
  });

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify({ contacts }));
  }, [contacts]);

  const handleSearch = (evt) => {
    setSearchContact(evt.target.value);
  };

  const searchedContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchContact.toLowerCase());
  });

  const onAddContact = (contact) => {
    const finalContact = {
      id: nanoid(),
      ...contact,
    };
    setContacts([...contacts, finalContact]);
  };

  const onDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <>
      <div>
        <h1 className="title">Phonebook</h1>
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
