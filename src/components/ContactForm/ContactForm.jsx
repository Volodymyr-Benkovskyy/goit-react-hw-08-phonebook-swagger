

import css from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectorContactsItems } from 'components/redux/contacts/selectors';
import {  addContacts } from 'components/redux/contacts/contactsOperation';




const ContactForm = () => {

 const contacts = useSelector(selectorContactsItems); 
  const dispatch = useDispatch();

 const handleSubmit = event => {
  event.preventDefault();
  const form = event.target; 

   const name = form.name.value; 
   const number = form.number.value; 
 
  const isNameOnTheList =contacts.some(
    el => el.name.toLowerCase() === name.toLowerCase()
  );
   
  if (isNameOnTheList) {
    alert(`A contact ${name} with the same number already exists.`);
  } else {
     const newContact = {
      name: name,
      number: number,
       id: nanoid(),
       
    };  
    
    dispatch(addContacts(newContact))
   
   };
   form.reset();
    
  };
  

    return (
      
      <form className={css.container} onSubmit={handleSubmit}>
       
        <input
          placeholder='Name...'
          className={css.textfield }
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
       
        <input
           placeholder='Number...'
          className={css.textfield }
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        /> 

         <button className={css.textfieldbtn} type="submit">
          Add contact
        </button> 
         
      
      
      </form>
    );
  }


export default ContactForm;

  
     




      