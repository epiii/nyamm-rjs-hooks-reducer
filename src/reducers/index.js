import contactReducer from "./contact"

const initialState = {}

const combineReducers = (reducers) => {
    return (state, action) => {
        return Object.keys(reducers).reduce((acc, prop) => {
            return ({
                ...acc,
                ...reducers[prop]({ [prop]: acc[prop] }, action)
            })
        }), state
    }
}
const appReducers = combineReducers({
    contactReducer
})

export { initialState, combineReducers, appReducers } 
