

import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { useEffect } from "react";
import { getContacts} from "components/redux/contacts/contactsOperation";
import {  useDispatch, useSelector} from "react-redux"; 
//import { selectorError, selectorIsLoading } from "components/redux/contacts/selectors";
import Loader from "components/Loader/Loader";
import { selectorIsLoading } from "components/redux/contacts/selectors";
//import Loader from "components/Loader/Loader";
//import { isContactsExist } from "components/redux/contacts/selectors";
//import { isContactsExist } from "components/redux/contacts/selectors";


const ContactsBookPage = () => {
 const isLoading = useSelector(selectorIsLoading)
  const dispatch = useDispatch();
    
  useEffect(() => {
  dispatch(getContacts())
  }, [dispatch]);  


   return (
     <>
         <Loader loading={isLoading }>
           <h1 style={{ textAlign: "center" }}>Phonebook</h1>
          <ContactForm />
          <Filter />
          <h2 style={{ textAlign: "center" }}>Contacts list</h2>
          <ContactList />
         </Loader>
    </>
  
  ) 
    
};

export default ContactsBookPage;


/* {isLoading && !error && <Loader/>}  */


// creating  fix pages home, login, register