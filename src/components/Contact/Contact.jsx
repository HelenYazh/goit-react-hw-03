import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <div className={css.contact}>
      <div>
        <p className={css.info}>
          <FaUser />
          &nbsp;
          {name}
        </p>
        <p className={css.info}>
          <BsFillTelephoneFill />
          &nbsp;
          {number}
        </p>
      </div>
      <button onClick={() => onDeleteContact(id)} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
