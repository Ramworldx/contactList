import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Routing } from '../../Routing';
import { updateContact } from '../../store/actions/Actions';
import Input from '../elements/Input';

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

    const onNameChange = (e) => {
        const value = e.target.value
        setContactName(value)
    }
    const onNumberChange = (e) => {
        const value = e.target.value
        setContactNumber(value)
    }
    const onSave = (e) => {
        e.preventDefault()
        const newContact = {
            ...contact,
            name: contactName,
            number: contactNumber,
        }
        if (contactName && contactNumber) {
            dispatch(updateContact(newContact))
            history.push(Routing.root)
        }
    }
    const onClose = () => {
        history.push(Routing.root)
    }
    return (
        <div className='CreateContact'>
            <div>
                <span className='CreateContact__title'>Edit contact</span>
            </div>
            <form onSubmit={onSave}>
                <Input onChange={onNameChange} value={contactName || ''}
                    minLength='1' maxLength='12' autoFocus />
                <Input type='tel' pattern='[0-9]{6,15}' minLength='6' maxLength='15'
                    onChange={onNumberChange} value={contactNumber || ''} placeholder='Contact Phone' 
                    title='Only numbers are available, minimum 6 numbers'/>
                <Input type='submit' value='Save' className='CreateContact__save' />
                <Input type='button' value='Close' className='CreateContact__close' onClick={onClose} />
            </form>
        </div>
    )
}

export default EditContact