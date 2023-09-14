

import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { useEffect } from "react";
import { getContacts} from "components/redux/contacts/contactsOperation";
import {  useDispatch} from "react-redux"; 
//import { selectorError, selectorIsLoading } from "components/redux/contacts/selectors";
import Loader from "components/Loader/Loader";
//import Loader from "components/Loader/Loader";
//import { isContactsExist } from "components/redux/contacts/selectors";
//import { isContactsExist } from "components/redux/contacts/selectors";




const ContactsBookPage = () => {

     const dispatch = useDispatch();
     //const error = useSelector(selectorError)
    
    
  useEffect(() => {
  dispatch(getContacts())
  }, [dispatch]);  


   return (
     <>
         <Loader>
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