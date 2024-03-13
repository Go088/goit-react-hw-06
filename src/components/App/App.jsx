import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import initialContacts from "../initialContacts.json";
import css from "./App.module.css";

const getCurrentContacts = () => {
  const savedContacts = localStorage.getItem("current-contacts");
  return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
};

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [contactList, setContactList] = useState(getCurrentContacts);

  useEffect(() => {
    localStorage.setItem("current-contacts", JSON.stringify(contactList));
  }, [contactList]);

  const updateSearchFilter = (evt) => {
    setInputValue(evt.target.value);
  };

  const filteredContacts = contactList.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(inputValue.toLowerCase())
  );

  // const handleSubmit = (values, actions) => {
  //   values.id = nanoid();
  //   setContactList([...contactList, values]);
  //   actions.resetForm();
  // };

  const addContact = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    setContactList((prevContacts) => {
      return [...prevContacts, newContact];
    });
    actions.resetForm();
  };

  const handleDeleteContact = (evt) => {
    setContactList(
      contactList.filter((contact) => contact.id !== evt.target.id)
    );
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={inputValue} onChange={updateSearchFilter} />
      <ContactList
        searchContact={filteredContacts}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
};
