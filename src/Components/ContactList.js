import React from 'react';
import {Link} from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList =(props) =>{
console.log(props);

const deleteHandler = (id) =>{
    props.getcontactId(id);// able to delete contacts
}

const renderContactList= props.Addcon.map((contact)=>{

return(
<ContactCard contact={contact} clickHandler={deleteHandler} key= {contact.id}></ContactCard>
);
})
  return(
      <div className="main">
            <h2 > Contact list
                <Link to="/add"> <button className = " ui button blue ">Add Contact</button></Link>
               </h2>
           
            <div className="ui celled list">{renderContactList} </div>
       </div>
    );
}


export default ContactList;