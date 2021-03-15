import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { updateContact } from '../../store/actions/Actions'
import '../../styles/createContact.scss'

const EditContact = () => {

    const list = useSelector(state => state.mainPage.contactsData)
    const dispatch = useDispatch()
    const [contactName, setContactName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const history = useHistory()
    const { id } = useParams();

    const contact = list.find(el => el.id === Number(id))

    useEffect(() => {
        setContactName(contact.name)
        setContactNumber(contact.number)
        //eslint-disable-next-line
    }, [])

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
            ...contact,
            name: contactName,
            number: contactNumber,
        }
        dispatch(updateContact(newContact))
        history.push('/contactList/')
    }
    let onClose = () => {
        history.push('/contactList/')
    }
    return (
        <div className='CreateContact'>
            <div>
                <span className='CreateContact__title'>Edit contact</span>
            </div>
            <div>
                <input placeholder="Contact Name" className='CreateContact__nameInput' 
                    onChange={onNameChange} value={contactName || ''} autoFocus />
            </div>
            <div>
                <input placeholder="Contact Phone" className='CreateContact__numberInput'
                    onChange={onNumberChange} value={contactNumber || ''} type='number' />
            </div>
            <div>
                <button className='CreateContact__save' onClick={onSave}>
                    Save
                </button>
                <button className='CreateContact__close' onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default EditContact