import React from "react";
import ContactCard from "./ContactCard";
function ContactList(props) {
  const deleteContactHandler = (id) => {
    // console.log(id);
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contacts) => {
    return (
      <ContactCard contacts={contacts} clickHandler={deleteContactHandler} />
    );
  });
  return <div className="ui celled list">{renderContactList}</div>;
}
export default ContactList;
