import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {

    // get contact id which help to remove a contact from the contact list
    const getContactId = (id) => {
        props.removeContactHandler(id);
    };

    let renderContactList;
    if(props.contacts.length === 0) {
        return renderContactList = <h5 className="text-center p-3 fw-lighter">You don't have Contacts. Add contacts to the list.</h5>;
    }

    // pass each contact to contact card to show to build Contact card DOM
     renderContactList = props.contacts.map((contact) => {
        return <ContactCard card={contact} clickHandler={getContactId} key={contact.id}  />
    });

    return (
        <div className="container">
            <h2>Contact List</h2>
            <div className="card">
                <ul className="list-group list-group-flush">
                    {renderContactList}            
                </ul>
            </div>
        </div>
    );
}

export default ContactList;