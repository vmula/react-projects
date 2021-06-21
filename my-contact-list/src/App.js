import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  const LOCAL_CONTACTS_KEY = 'contacts'
  const [contacts, setContacts] = useState([]);

  // received the name and email from AddContact and set them to contacts list
  const getContactsHandler = (contact) => {
    setContacts([...contacts, {id: uuidv4(), ...contact}]);    
  };

  // fetch contacts list from local storage and assign to Contacts
  useEffect(() => {
    const retreiveContacts = JSON.parse(localStorage.getItem(LOCAL_CONTACTS_KEY));
    if(retreiveContacts) {
      setContacts(retreiveContacts)
    }
  }, []);

  // set each contact in the local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);


  // onclick of each delete icon of contact that particular contact will be deleted from the list
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  return (  
    <div>
      <div className="container-fluid m-0 p-0">
        <Header />
        <AddContact getContacts={getContactsHandler}  />
        <hr />
        <ContactList contacts= {contacts} removeContactHandler= {removeContactHandler} />
      </div>
    </div>
  );
}

export default App;
