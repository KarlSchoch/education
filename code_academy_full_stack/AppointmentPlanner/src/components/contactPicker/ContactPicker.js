import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {

  return (
    <>
      <label for='contact'>Contact</label>
      <select name={name} id='contact' onChange={onChange} value={value} required>
        <option value=''>No Contact Selected</option>
        {
          contacts.map(({name}) => {
            return <option value={name}>{name}</option>
          })
        }
      </select>
    </>
  );
};
