import Contact from "../Contact/Contact";

const ContactList = ({ list, onDeleteContact }) => {
  return list.map((contact) => {
    return (
      <Contact
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        onDeleteContact={onDeleteContact}
      />
    );
  });
};

export default ContactList;
