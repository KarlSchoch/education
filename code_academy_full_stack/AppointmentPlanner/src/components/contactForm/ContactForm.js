import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form>
        <label for='contactName'>Name</label>
        <input name='contactName' id='contactName' onChange={setName} value={name} />
        <label for='phoneNumber'>Phone Number</label>
        <input name='phoneNumber' id='phoneNumber' onChange={setPhone} value={phone} />
        <label for='email'>Email</label>
        <input name='email' id='email' onChange={setEmail} value={email} />
        <button type='submit' onClick={handleSubmit}>Add Contact</button>
      </form>
    </>
  );
};
