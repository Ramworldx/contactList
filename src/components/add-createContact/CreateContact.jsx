import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { setContact } from '../../store/actions/Actions'
import '../../styles/createContact.scss'

const CreateContact = () => {

    const [contactName, setContactName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const list = useSelector(state => state.mainPage.contactsData)
    const dispatch = useDispatch()
    const history = useHistory()

    const randomId = Math.ceil(Math.random()*1000)

    let onNameChange = (event) => {
        let value = event.target.value
        setContactName(value)
    }
    let onNumberChange = (event) => {
        let value = event.target.value
        setContactNumber(value)
    }
    let onSave = () => {
        const newContact = {
            name: contactName,
            number: contactNumber,
            id: randomId,
            imageURL: `https://picsum.photos/200/300?random=${list.length + 1}`
        }
        if (contactName.length && contactNumber.length) {
            dispatch(setContact(newContact))
            history.push('/contactList/')
        }
        else { }
    }
    let onClose = () => {
        history.push('/contactList/')
    }
    return (
        <div className='CreateContact'>
            <div>
                <span className='CreateContact__title'>New contact</span>
            </div>
            <div>
                <input onChange={onNameChange} value={contactName || ''}
                    placeholder="Contact Name" className='CreateContact__nameInput' autoFocus />
            </div>
            <div>
                <input onChange={onNumberChange} value={contactNumber || ''} type='number'
                    placeholder="Contact Phone" className='CreateContact__numberInput' />
            </div>
            <div>
                <button onClick={onSave} className='CreateContact__save'>
                    Save
                </button>
                <button onClick={onClose} className='CreateContact__close'>
                    Close
                </button>
            </div>
        </div>
    )
}

export default CreateContact