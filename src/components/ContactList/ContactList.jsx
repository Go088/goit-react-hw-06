import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const allContacts = useSelector((state) => state.contacts.items);
  const searchContacts = useSelector((state) => state.filters.name);

  const contacts =
    searchContacts === ""
      ? allContacts
      : allContacts.filter((contact) =>
          contact.name
            .toLowerCase()
            .includes(searchContacts.filter.toLowerCase())
        );

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
