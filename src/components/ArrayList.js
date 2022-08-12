import React from "react";

const contactInfo = 
[
    {name: "Juan", phone: "0999999999"},
    {name: "Dhos", phone: "09888888888"},
    {name: "Thirdy", phone: "09777777777"}
];
const contacts = contactInfo.map( (contact, index) => {
    return <li key={index}>{contact.name}: {contact.phone}</li>
} );

class ArrayList extends React.Component {
    render() {
        return (
        <ul>
            {contacts}
        </ul>
        );
    }
}

export default ArrayList;