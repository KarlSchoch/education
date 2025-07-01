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
    setCurrentNameExists(contacts.some(contact => contact.name == currentName));
  }, [currentName, contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <form>
          <label for='contactName'>Name</label>
          <input name='contactName' id='contactName' onChange={handleInputChange} value={currentName} />
          { currentNameExists && <p style={{ color: 'red', margin: '0 0 .5rem' }}>This name already exists in your contacts</p>}
          <label for='phoneNumber'>Phone Number</label>
          <input name='phoneNumber' id='phoneNumber' onChange={handleInputChange} />
          <label for='email'>Email</label>
          <input name='email' id='email' onChange={handleInputChange} />
          <button type='submit'>Add Contact</button>
        </form>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
