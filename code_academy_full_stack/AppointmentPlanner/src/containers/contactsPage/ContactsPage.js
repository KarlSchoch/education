import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [currentName, setCurrentName] = useState('');
  const [currentPhoneNumber, setCurrentPhoneNumber] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentNameExists, setCurrentNameExists] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!currentNameExists) {
      addContact(
        currentName,
        currentPhoneNumber,
        currentEmail
      );
      setCurrentName('');
      setCurrentPhoneNumber('');
      setCurrentEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  function handleInputChange(e) {
    // Update the state variable
    const {name, value} = e.target;
    const stateMap = {
      contactName: setCurrentName,
      phoneNumber: setCurrentPhoneNumber,
      email: setCurrentEmail,
    }
    stateMap[name]?.(value)
  }
  useEffect(() => {
    setCurrentNameExists(contacts.some(contact => contact.name === currentName));
  }, [currentName, contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={currentName}
          setName={handleInputChange}
          phone={currentPhoneNumber}
          setPhone={handleInputChange}
          email={currentEmail}
          setEmail={handleInputChange}
          handleSubmit={handleSubmit}
        />
        { currentNameExists && <p style={{ color: 'red' }}>This name already exists in your contacts</p>}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
