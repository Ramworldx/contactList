import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { setUserName, clearContacts, setIsLogged } from '../../store/actions/Actions'
import '../../styles/header.scss'

const Header = () => {
    const name = useSelector(state => state.mainPage.userName)

    const dispatch = useDispatch()
    
    const history = useHistory()

    let onLogoutClick = () => {
        localStorage.clear()
        dispatch(setUserName(''))
        dispatch(setIsLogged(false))
        dispatch(clearContacts(''))
        history.push('/login')
    }
    return (
        <div className='Header'>
            <div>
                <span className='Header__title'>Hello, {name} </span>
            </div>
            <div>
                <span onClick={onLogoutClick} className='Header__logout'>Logout</span>
            </div>
        </div>
    )
}

export default Header