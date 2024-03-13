import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ searchContact, deleteContact }) {
  return (
    <ul className={css.list}>
      {searchContact.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
}
