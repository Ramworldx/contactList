import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ModalEx from '../modalComponent/Modal'
import Header from '../header/Header'
import MediaCard from './contactCard/MediaCard'
import DownloadCSV from './downloadCSV/DownloadCSV'


const MainPage = () => {

    const state = useSelector(state => state)

    const contacts = useSelector(state => state.mainPage.contactsData)

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    })

    return (
        <div className='MainPage'>
            <Header />
            <div className='MainPage__buttonsBlock'>
                <ModalEx edit={'new'} />
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
                        </div>)}
            </div>
        </div>
    )
}

export default MainPage