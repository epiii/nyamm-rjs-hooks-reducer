import contactReducer from "./contact"

const initialState = {
    // list 
    getContactResult: false,
    getContactLoading: false,
    getContactError: false,
    
    // add
    addContactResult: false,
    addContactLoading: false,
    addContactError: false,

    // delete
    deleteContactResult: false,
    deleteContactLoading: false,
    deleteContactError: false,
}

// console.log(contactReducer)    
const combineReducers = (reducers) => {
    return (state, action) => {
        return Object.keys(reducers)
            .reduce((acc, prop) => {
                return {
                    ...acc,
                    ...reducers[prop]({ [prop]: acc[prop] }, action)
                };
            }, state);
    }
}

const appReducers = combineReducers({
    contactReducer
})

export { initialState, combineReducers, appReducers } 
