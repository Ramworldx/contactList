import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearState } from '../../store/actions/Actions';

const Header = () => {
    const name = useSelector(state => state.mainPage.userName)

    const dispatch = useDispatch()

    const onLogoutClick = () => {
        localStorage.clear()
        dispatch(clearState())
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