export const SET_USER_NAME = "SET_USER_NAME";
export const SET_IS_LOGGED = "SET_IS_LOGGED";
export const SET_CONTACT = "SET_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const CLEAR_CONTACTS = "CLEAR_CONTACTS";


export const setUserName = (login) => ({ type: SET_USER_NAME, login });
export const setIsLogged = (bool) => ({ type: SET_IS_LOGGED, bool });
export const setContact = (contact) => ({ type: SET_CONTACT, contact });
export const deleteContact = (del) => ({ type: DELETE_CONTACT, del });
export const updateContact = (edit) => ({ type: UPDATE_CONTACT, edit });
export const clearContacts = (clear) => ({ type: CLEAR_CONTACTS, clear });
