import React from'react';
import {Link} from 'react-router-dom';
import user from '../images/user.png';
import {useHistory} from 'react-router-dom';
const DeleteContact =(props) =>{
 
    return(
        
       <div className="ui center aligned container">
           <div className="ui center"> 
         <h2>Are you sure want to Delete?</h2>
         <button class="ui left button">
         <Link to="/">
         Yes    
         </Link>
         </button>
         
         <button class="ui right button" onClick="">
         <Link to="/add">
         No
         </Link>
         </button>
         
         </div>
       </div>
       

    );
}
export default DeleteContact;