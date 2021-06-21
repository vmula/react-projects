import React from 'react';

const ContactCard = (props) => {

    // destructuring of card properties
    const {id, name, email} = props.card;

    return (
        <li className="list-group-item d-flex justify-content-between">
            <div className="d-flex flex-row bd-highlight">
                <div className="p-2">
                    <i className="fa fa-user-circle fa-4x" aria-hidden="true"></i>
                </div>
                <div className="p-2">
                    <div className="fw-bolder">{name}</div>
                    <div className="fst-italic fw-light">{email}</div>
                </div>
            </div>
            <i 
                className="fas fa-trash text-danger cursor-pointer p-3"
                onClick={() => props.clickHandler(id)}
                >
            </i>
        </li>
    )
}

export default ContactCard;