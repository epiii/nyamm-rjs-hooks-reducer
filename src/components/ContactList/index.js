import React, { useEffect } from 'react'
import { useAppState } from '../../contexts/AppState'
import { getContactList } from '../../actions/contactAction'

export default function ContactList() {
    const [state, dispatch] = useAppState()
    const { getContactResult, getContactLoading, getContactError } = state

    useEffect(() => {
        console.log('1. contact list (useEffect)')

        console.log('state compo')
        console.log(state)

        getContactList(dispatch)
    }, [dispatch])

    return (
        <div>
            <h4>List</h4>
            {
                getContactResult ? (
                    getContactResult.map((contact) => (
                        <p key={contact.id}>{contact.name} ({contact.phone})</p>)
                    )) : getContactLoading ? (
                        <p>Loading ....</p>
                    ) : (getContactError ? getContactError :
                        <b style={{ color: 'red' }}>sorry data not found</b>
                )
            }
        </div>
    )
}