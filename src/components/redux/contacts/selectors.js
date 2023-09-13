import { createSelector } from '@reduxjs/toolkit';

export const selectorContactsItems = state => state.contacts.items;
export const selectorFilter = state => state.filter;
export const selectorFilteredContacts = createSelector(
  [selectorContactsItems, selectorFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
