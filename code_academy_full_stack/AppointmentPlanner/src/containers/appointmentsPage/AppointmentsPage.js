import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

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

  function handleInputChange(e) {
    const {name, value} = e.target;
    const stateMap = {
      title: setCurrentName,
      contact: setContact,
      date: setDate,
      time: setTimeEntered,
    }
    stateMap[name]?.(value)
  }


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
          setTitle={handleInputChange}
          contact={contact}
          setContact={handleInputChange}
          date={date}
          setDate={handleInputChange}
          time={timeEntered}
          setTime={handleInputChange}
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