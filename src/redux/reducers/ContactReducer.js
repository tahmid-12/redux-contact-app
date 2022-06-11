const initialState = [
    {
        id: 0,
        name: "Robert Downey Jr",
        number: 1234567890
    },
    {
        id: 1,
        name: "Chris Evans",
        number: 9876543210
    },
];

const contactReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default contactReducer;