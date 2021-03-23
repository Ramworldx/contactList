export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_IS_LOGGED = 'SET_IS_LOGGED';
export const SET_CONTACT = 'SET_CONTACT';
export const SET_ALL_CONTACTS = 'SET_ALL_CONTACTS';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const CLEAR_STATE = 'CLEAR_STATE';

export const setUserName = (login) => ({ type: SET_USER_NAME, login });
export const setIsLogged = (bool) => ({ type: SET_IS_LOGGED, bool });
export const setContact = (contact) => ({ type: SET_CONTACT, contact });
export const setAllContacts = (contacts) => ({ type: SET_ALL_CONTACTS, contacts });
export const deleteContact = (del) => ({ type: DELETE_CONTACT, del });
export const updateContact = (edit) => ({ type: UPDATE_CONTACT, edit });
export const clearState = () => ({ type: CLEAR_STATE });
