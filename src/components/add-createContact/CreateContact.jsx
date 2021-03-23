import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Routing } from '../../Routing';
import { setContact } from '../../store/actions/Actions';
import Input from '../elements/Input';

const CreateContact = () => {

    const [contactName, setContactName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const randomId = Math.ceil(Math.random() * 1000)

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
            name: contactName,
            number: contactNumber,
            id: randomId,
            imageURL: `https://picsum.photos/id/${randomId}/200/300`
        }
        if (contactName && contactNumber) {
            dispatch(setContact(newContact))
            history.push(Routing.root)
        }
    }

    const onClose = () => {
        history.push(Routing.root)
    }
    return (
        <div className='CreateContact'>
            <div>
                <span className='CreateContact__title'>New contact</span>
            </div>
            <form onSubmit={onSave}>
                <Input onChange={onNameChange} value={contactName || ''}
                    minLength='1' maxLength='12' autoFocus />
                <Input type='tel' placeholder='Contact Phone number'
                    title='Only numbers are available, minimum 6 numbers'
                    onChange={onNumberChange} value={contactNumber || ''}
                    pattern='[0-9]{6,15}' minLength='6' maxLength='15' />
                <Input type='submit' value='Save' className='CreateContact__save' />
                <Input type='button' value='Close' className='CreateContact__close'
                    onClick={onClose} />
            </form>
        </div>
    )
}

export default CreateContact