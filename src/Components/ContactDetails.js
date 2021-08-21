import React from'react';
import {Link} from 'react-router-dom';
import user from '../images/user.png';
const ContactDetails=(props)=>{

    const {name,mail}= props.location.state.contact;
 
    return(
       <div className="main">
       <div className="ui card centered">  
       <div className="image">  
       <img src={user} alt="user" /></div>
       <div className="content">
       <div className="header"> {name}</div>
       <div className="discription"> {mail}</div>
       </div>
       </div>
       <div >
          <Link to="/" >
           <button className="  ui button blue center " floated="center">Back</button>
           </Link> 
           </div>
       </div>


    );
}
export default ContactDetails;