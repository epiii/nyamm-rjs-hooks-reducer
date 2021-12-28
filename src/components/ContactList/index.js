import React, {  useEffect } from 'react'
import { deleteContact, detailContact, getContactList } from '../../actions/contactAction'
import { useAppState } from '../../contexts/AppState'

export default function ContactList() {
    const [state, dispatch] = useAppState()
    const { getContactResult, getContactLoading, getContactError, deleteContactResult } = state

    useEffect(() => {
        // console.log('init state', state)
        getContactList(dispatch)
    }, [dispatch])

    useEffect(() => {
        // console.log('del state', state)
        if (deleteContactResult) { getContactList(dispatch) }
    }, [dispatch, deleteContactResult])

    return (
        <div>
            <h4>List</h4>
            {
                getContactResult ? (
                    getContactResult.map((contact) => (
                        <p
                            key={contact.id}
                        >
                            {contact.name} ({contact.phone})
                            <button style={{ margin: 5 }} onClick={() => detailContact(dispatch, contact)}>edit</button>
                            <button onClick={() => deleteContact(dispatch, contact.id)}>delete</button>
                        </p>
                    )
                    )) : getContactLoading ? (
                        <p>Loading ....</p>
                    ) : (getContactError ? getContactError :
                        <b style={{ color: 'red' }}>sorry data not found</b>
                )
            }
        </div>
    )
}