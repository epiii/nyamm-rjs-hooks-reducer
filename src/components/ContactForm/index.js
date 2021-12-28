import React, { useEffect, useState } from 'react'
import { addContact, getContactList, updateContact } from '../../actions/contactAction'
import { useAppState } from '../../contexts/AppState'

function ContacForm() {
    const [namex, setNamex] = useState('')
    const [phone, setPhone] = useState('')
    const [id, setId] = useState('')

    const [state, dispatch] = useAppState()
    const { getContactResult, updateContactResult, detailContactResult, addContactResult } = state

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('1. form / handlesubmit ');
        console.log(namex, phone);

        // let datax = { id: id, name: namex, phone: phone }
        if (id) {
            updateContact(dispatch, { id: id, name: namex, phone: phone })
        } else {
            addContact(dispatch, { name: namex, phone: phone })
        }
    }

    // get detail 
    useEffect(() => {
        // console.log('detailContactResult', detailContactResult)
        if (detailContactResult) {
            console.log('1. form / set detail contact', detailContactResult);
            setId(detailContactResult.id)
            setNamex(detailContactResult.name)
            setPhone(detailContactResult.phone)
        }
    }, [detailContactResult])

    // add contact 
    useEffect(() => {
        if (addContactResult) {
            getContactList(dispatch)
            setNamex('')
            setPhone('')
        }
    }, [addContactResult, dispatch])

    // refresh list
    useEffect(() => {
        if (getContactResult) {
            setId('')
            setPhone('')
            setNamex('')
        }
    }, [getContactResult, dispatch])

    // udpate contact 
    useEffect(() => {
        if (updateContactResult) {
            getContactList(dispatch)
            setId('')
            setNamex('')
            setPhone('')
        }
    }, [updateContactResult, dispatch])

    // cancel update (after get detail)
    const cancelUpdate = () => {
        setNamex('')
        setId('')
        setPhone('')
    }

    return (
        <div>
            <h4>{id ? 'Edit' : 'Add'}</h4>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input
                    onChange={(event) => setNamex(event.target.value)}
                    name="name"
                    value={namex}
                    placeholder="name"
                    type="text"
                />
                <input
                    onChange={(event) => setPhone(event.target.value)}
                    name="phone"
                    value={phone}
                    placeholder="phone"
                    type="text"
                />
                <button>submit</button>
                {
                    id && (<button onClick={() => cancelUpdate()}>cancel</button>)
                }
            </form>
        </div>
    )
}

export default ContacForm