import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";


// AppointmentForm Requirements:
// -[] Render a form with:
//   -[x] The onSubmit attribute set to the callback function passed in via props
//   -[x] 3 controlled input components, to be used for the name, date and time appointment data
//   -[] A ContactPicker component with the contacts list passed in via props
//   -[x] A submit button
// -[x] Use getTodayString() to set the min attribute of the date input

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for='title'>Title</label>
        <input name='title' id='title' onChange={setTitle} value={title} required />
        <ContactPicker 
          contacts={contacts} 
          onChange={setContact} 
          name='contact'
          value={contact} 
        />
        <label for='date'>Date</label> 
        <input name='date' id='date' type='date' min={getTodayString()} onChange={setDate} value={date} required />
        <label for='time'>Time</label>
        <input name='time' id='time' type='time' onChange={setTime} value={time} required />
        <button type='submit'>Add Appointment</button>
      </form>
    </>
  );
};
