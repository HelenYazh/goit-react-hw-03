import Contact from "../Contact/Contact";

const ContactList = ({ list }) => {
  return list.map((contact) => {
    return (
      <Contact
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
      />
    );
  });
};

export default ContactList;
