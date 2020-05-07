import React from 'react';

const Contacts = ({ contacts }) => { //Contacts method accepts teh contacts state we created eariler in App. an returns a mapped version of the state which loops over teh card to insert name,email and catchphrase.
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact) =>(
            <div class = "card">
            <div class="card-body">
                <h5 class="card-title">{contact.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p class = "card-text">{contact.company.catchPhrase}</p>
            </div>
            </div>
            ))}
        </div>
    )
};


export default Contacts