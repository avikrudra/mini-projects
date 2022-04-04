import React from "react";

const ContactCard = (props) => {
  const { id, name, email } = props.contacts;
  return (
    <div
      className="item"
      style={{
        // display: "flex",
        // flexDirection: "row",
        // justifyContent: "space-between",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => {
          props.clickHandler(id);
        }}
      ></i>
    </div>
  );
};
export default ContactCard;
