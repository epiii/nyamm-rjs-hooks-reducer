import { func, object } from 'prop-types'
import React, { createContext, useContext, useReducer } from 'react'

const Context = createContext()

export function AppStateProvider({ reducer, initialState = {}, children }) {
    const value = useReducer(reducer, initialState)

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

AppStateProvider.propTypes = {
    reducer: func,
    initialState: object,
}

export function useAppState() {
    return useContext(Context)
}