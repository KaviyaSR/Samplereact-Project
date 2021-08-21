import React from'react';
import {Link} from 'react-router-dom';
const ContactCard=(props)=>{

    const {id,name,mail}= props.contact;
 
    return(
    <div class="item">
        <i class="big user icon" style={{color:"blue"}}></i>
    <div class="content">
        <Link to={{pathname:'/reactexp/ ${id}',state:{contact:props.contact}}}>
    <div className="header">{name}</div>
    <div>{mail}</div>
    </Link>
        </div>
        <div>
        <Link to= '/delete'>
        <i onClick={()=> props.clickHandler(id)} className="trash alternate outline icon" 
        ></i>
        </Link></div>
    </div>
    );
}
export default ContactCard;