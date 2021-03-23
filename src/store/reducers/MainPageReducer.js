import {
  SET_USER_NAME,
  SET_IS_LOGGED,
  SET_CONTACT,
  SET_ALL_CONTACTS,
  UPDATE_CONTACT,
  CLEAR_STATE,
  DELETE_CONTACT,
} from '../actions/Actions';

const initialState = {
  userName: '',
  isLogged: false,
  contactsData: [],
};

const MainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME: {
      return {
        ...state,
        userName: action.login,
      };
    }
    case SET_IS_LOGGED: {
      return {
        ...state,
        isLogged: action.bool,
      };
    }
    case SET_CONTACT: {
      return {
        ...state,
        contactsData: [...state.contactsData, action.contact],
      };
    }
    case SET_ALL_CONTACTS: {
      return {
        ...state,
        contactsData: action.contacts,
      };
    }
    case DELETE_CONTACT: {
      return {
        ...state,
        contactsData: state.contactsData.filter((el) => el.id !== action.del),
      };
    }
    case UPDATE_CONTACT: {
      return {
        ...state,
        contactsData: state.contactsData.map((person) => {
          if (person.id === action.edit.id) {
            return action.edit;
          }
          return person;
        }),
      };
    }
    case CLEAR_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};

export default MainPageReducer;
