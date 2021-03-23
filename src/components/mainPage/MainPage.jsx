import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalEx from '../modalComponent/Modal';
import Header from '../header/Header';
import MediaCard from './contactCard/MediaCard';
import DownloadCSV from './downloadCSV/DownloadCSV';
import { loadState } from '../../localStorage/LocalStorage';
import { setAllContacts } from '../../store/actions/Actions';


const MainPage = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const contacts = useSelector(state => state.mainPage.contactsData)

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state])

    useEffect(() => {
        const func = () => {
            const result = loadState()
            debugger
            if (result && result.mainPage && result.mainPage.contactsData)
                dispatch(setAllContacts(result.mainPage.contactsData))
        }
        window.addEventListener('storage', func)
        return () => {
            window.removeEventListener('storage', func)
        }
    }, [])

    return (
        <div className='MainPage'>
            <Header />
            <div className='MainPage__buttonsBlock'>
                <ModalEx edit='new' />
                <DownloadCSV />
            </div>
            <div className='MainPage__contactsBlock'>
                {contacts.length <= 0 ?
                    <div className='MainPage__noContactsMessage'>
                        No contacts yet
                    </div>
                    :
                    contacts.sort((a, b) => (a.name > b.name) * 2 - 1)
                        .map(el => <div className='MainPage__buttonsBlock-contactCard' key={el.id}>
                            <MediaCard contact={el} />
                        </div>)
                }
            </div>
        </div>
    )
}

export default MainPage