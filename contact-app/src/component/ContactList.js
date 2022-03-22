import React from "react";
import ContactCard from "./ContactCard";
function ContactList(props) {
  const renderContactList = props.contacts.map((contacts) => {
    return <ContactCard contacts={contacts} />;
  });

  return <div className="ui celled list">{renderContactList}</div>;
}
export default ContactList;