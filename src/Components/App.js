import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {uuid} from 'uuidv4';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import Contacts from './Contacts';
import ContactDetails from './ContactDetails';
import DeleteContact from './DeleteContact';
function App() {

const [Addcon,setContacts]= useState([]);
const LOCAL_STORAGE_KEY= "Addcon";
  {/*const Addcon =[
    {id:"1",
    name:"Olivia",
    email: "Olivia@gmail.com"
    },
     {id:"2",
    name:"Bolivia",
    email: "Bolivia@gmail.com"
     }
  ]
*/}
  const addcontactHandler=(contact) =>{
    console.log(contact);
    setContacts([...Addcon,{id:uuid(),...contact}]);
  }

  const removecontactHandler= (id) =>{
     const newContactList= Addcon.filter((contact) => {
       return contact.id !==id;
     })
setContacts(newContactList);
  }

  useEffect(() => {
     const retrivecontacts=  JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY));
     if(retrivecontacts) setContacts(retrivecontacts) ;
   },[] )

   useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(Addcon));
   },[Addcon] )

  return(
    <div>
      <Router>
      < Header/>
      <Switch>
      <Route path= "/" exact 
             render={(props)=>(<ContactList {...props} Addcon={Addcon} getcontactId={removecontactHandler}/>  ) }
      />
      <Route path= "/add" render={(props) => (<Contacts  {...props}addcontactHandler={addcontactHandler}/>) }/>
      <Route path="/reactexp/:id" component={ContactDetails}/>
      <Route path="/delete" component={DeleteContact}/>
      </Switch>
      
     {/*<Contacts addcontactHandler={addcontactHandler}></Contacts> 
     <ContactList Addcon={Addcon} getcontactId={removecontactHandler} />*/}
      </Router>
    
    </div> 
  );  
 
}

export default App;
