import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import "./App.css";
import dataPhone from "../db/contacts.json";
import { useState } from "react";

export default function App() {
  const [searchContact, setSearchContact] = useState("");

  const handleSearch = (evt) => {
    setSearchContact(evt.target.value);
  };

  const searchedContacts = dataPhone.filter((contact) => {
    return contact.name.toLowerCase().includes(searchContact.toLowerCase());
  });

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox value={searchContact} onChange={handleSearch} />
        <ContactList list={searchedContacts} />
      </div>
    </>
  );
}
