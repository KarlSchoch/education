import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

// Requirements

// -[x] Receive three props:
//   -[x] The current list of appointments
//   -[x] The current list of contacts
//   -[x] A callback function for adding a new appointment
// -[x] Keep track of four local state variables, the current name, contact, date, and time entered into the form
// -[x] Add a new appointment on form submission
// -[x] Clear the form on submission
// -[x] In the Add Appointment section, render an AppointmentForm with the following passed via props:
//   -[x] local state variables
//   -[x] local state variable setter functions
//   -[x] handleSubmit callback function
// -[x] In the Appointments section, render a TileList with the appointment array passed via props

export const AppointmentsPage = ({ appointments, contacts, addAppointment}) => {
  /*
  Define state variables for 
  appointment info
    the current name, contact, date, and time entered
  */
  const [currentName, setCurrentName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [timeEntered, setTimeEntered] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   addAppointment(
    currentName,
    contact,
    date,
    timeEntered
   )
    setCurrentName('');
    setContact('');
    setDate('');
    setTimeEntered('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={currentName}
          setTitle={setCurrentName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={timeEntered}
          setTime={setTimeEntered}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};