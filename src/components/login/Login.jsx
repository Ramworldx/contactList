import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Routing } from '../../Routing';
import { setIsLogged, setUserName } from '../../store/actions/Actions';
import Input from '../elements/Input';

const Login = () => {

    const name = useSelector(state => state.mainPage.userName)

    const dispatch = useDispatch()

    const history = useHistory()

    const onChangeName = (e) => {
        const value = e.target.value
        dispatch(setUserName(value))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (name) {
            history.push(Routing.root)
            dispatch(setIsLogged(true))
        }
    }

    return (
        <div className='CreateContact'>
            <div>
                <span className='CreateContact__title'>Sign In</span>
            </div>
            <form onSubmit={onSubmit}>
                <Input onChange={onChangeName} value={name || ''} placeholder='What`s your name?'
                    autoFocus />
                <Input type='submit' value='Submit' className='CreateContact__save' />
            </form>
        </div>
    )
}
export default Login