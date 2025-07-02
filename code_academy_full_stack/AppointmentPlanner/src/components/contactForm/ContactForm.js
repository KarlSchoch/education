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
      <form onSubmit={handleSubmit}>
        <label for='contactName'>Name</label>
        <input name='contactName' id='contactName' onChange={setName} value={name} required />
        <label for='phoneNumber'>Phone Number</label>
        <input name='phoneNumber' id='phoneNumber' type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' required onChange={setPhone} value={phone} />
        <label for='email'>Email</label>
        <input name='email' id='email' onChange={setEmail} value={email} pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" required />                                         
        <button type='submit'>Add Contact</button>
      </form>
    </>
  );
};
