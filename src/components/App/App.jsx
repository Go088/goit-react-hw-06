import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect, useState } from "react";
import initialContacts from "../initialContacts.json";
import css from "./App.module.css";

const getCurrentContacts = () => {
  const savedContacts = localStorage.getItem("current-contacts");
  return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
};

export const App = () => {
  const [contactList] = useState(getCurrentContacts);

  useEffect(() => {
    localStorage.setItem("current-contacts", JSON.stringify(contactList));
  }, [contactList]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
