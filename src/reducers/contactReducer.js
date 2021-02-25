import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACT,
  // SEARCH_CONTACT,
} from "../constant/types";

const intialState = {
  contacts: [
    {
      id: 1,
      name: "Rohan kumar",
      username: "rohan",
      email: "Sincere@april.biz",

      phone: "7895459875",
    },
    {
      id: 2,
      name: "sohan kumar",
      username: "Antonette",
      email: "Shanna@melissa.tv",

      phone: "9654785248",
    },
    {
      id: 3,
      name: "saurabh singh",
      username: "saurabh",
      email: "saurabh@gmail.com",

      phone: "9587778954",
    },
    {
      id: 4,
      name: "honey singh",
      username: "Karianne",
      email: "honey@gmail.com",

      phone: "6587458977",
    },
    {
      id: 5,
      name: "modi kumar",
      username: "Kamren",
      email: "modi@gmail.com",
      phone: "785469888",
    },
  ],
  contact: null,
  selectedContacts: [],
  searchContacts: [],
  searching: false,
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case "SEARCH_CONTACT":
      let search = state.contacts.filter((value) => {
        if (value.name.includes(action.payload)) {
          return true;
        } else {
          return false;
        }
      });
      console.log(search);
      return {
        ...state,
        searchContacts: [...search],
      };

    case "SEARCHING_TRUE":
      return {
        ...state,
        searching: true,
      };
    case "SEARCHING_FALSE":
      return {
        ...state,
        searching: false,
      };
    case GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case DELETE_SELECTED_CONTACT:
      return {
        ...state,
        contacts: [],
        searchContacts: [],
      };
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContacts: action.payload,
      };

    case CLEAR_CONTACT:
      return {
        ...state,
        selectedContacts: [],
      };
    default:
      return state;
  }
};
