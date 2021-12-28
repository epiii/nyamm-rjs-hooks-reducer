import React, { useEffect, useState } from 'react'
import { addContact, getContactList } from '../../actions/contactAction'
import { useAppState } from '../../contexts/AppState'

function ContacForm() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    
    const [state, dispatch] = useAppState()
    const { addContactResult } = state

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('1. form / handlesubmit ');
        console.log(name, phone);

        let datax = { name: name, phone: phone }
        addContact(dispatch, datax)
    }

    useEffect(() => {
        if (addContactResult) {
            getContactList(dispatch)
            setName('looooo')
            setPhone('99999')
        }
    }, [addContactResult, dispatch])

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input
                    onChange={(event) => setName(event.target.value)}
                    name="name"
                    placeholder="name"
                    type="text"
                />
                <input
                    onChange={(event) => setPhone(event.target.value)}
                    name="phone"
                    placeholder="phone"
                    type="text"
                />
                <button>submit</button>
            </form>
        </div>
    )
}

export default ContacForm