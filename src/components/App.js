import React , {useState, useEffect} from "react";
// import {uuid} from 'uuidv4' ;
import { v4 as uuid } from "uuid";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
function App() {
  const LOCAL_STORAGE_KEY = "contacts" ;
  const [contacts  , setcontacts] = useState([]) ;
  
  const addContactHandler = (contact) => {
    setcontacts([...contacts , contact]) ;
  }
  
  useEffect(() => {
      // console.log("aman") ;
      const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ;
      if(retriveContacts){
        setcontacts(retriveContacts) ;
      }
  } , []) ;

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(contacts)) ;
  } , [contacts] );

  return (
    <div  className="ui container">
      <Header />
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
