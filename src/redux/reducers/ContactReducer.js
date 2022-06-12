// import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 0,
        name: "Robert Downey Jr",
        number: 1234567890,
        email: "robert@gmail.com"
    },
    {
        id: 1,
        name: "Chris Evans",
        number: 9876543210,
        email: "chris@gmail.com"
    },
];

const contactReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map((contact) => contact.id === action.payload.id ? action.payload : contact);
            state = updateState;
            return state;
        default:
            return state;
    }
}



export default contactReducer;