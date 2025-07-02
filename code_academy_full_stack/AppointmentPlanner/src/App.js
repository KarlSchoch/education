import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([{name: 'Karl', phone: '513-292-1797', email: 'karl.schoch@gmail.com'}]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  function addContact(name, phoneNumber, email) {
    const newContact = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    }
    setContacts([...contacts, newContact])
  }
  function addAppointment(name, contact, date, time) {
    const newAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time,
    }
    setAppointments([...appointments, newAppointment])
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact} /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contacts={contacts} appointments={appointments} addAppointment={addAppointment}  /> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
