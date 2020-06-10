import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import Contacts from "../contacts";


export default function App() {
  return (
    <div>
   <h1>Selena's Contacts</h1>
   <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqYjKvlYjzi1FK8_mHMjP7H053UIg2kMRIMHJnJ78_WSqt0lkb&usqp=CAU"/>
   {Contacts.map(function(contact){
     return (
      <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
     );
   })}
    </div>
  );
}
